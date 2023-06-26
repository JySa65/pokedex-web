import axios, { InternalAxiosRequestConfig } from "axios";

const http = axios.create({
  isAuth: true,
});

http.interceptors.response.use(
  (response) => {
    return {
      ...response.data,
      status: response.status,
      contentType: response?.headers?.["content-type"],
    };
  },
  (error) => {
    const { response = {} } = error;

    if (response?.status >= 400 && response?.status < 500) {
      error = {
        message: `Bad response? from server at ${response?.url} => ${response?.status}, ${response?.statusText}`,
        url: response?.url,
        status: +response?.status,
        statusText: response?.statusText,
        data: response?.data,
      };
      const { data } = response;
      const { msg, detail, msgs } = data;

      error.message = msg || detail || msgs;

      if (msg) {
        error.message = msg;
      }

      const nonFieldErrors =
        response?.data?.non_field_errors || error?.message?.non_field_errors;

      if (nonFieldErrors !== undefined) {
        const text = nonFieldErrors[0];
        error.message = text;
      }

      return Promise.reject(error);
    }

    if (response?.status === 500) {
      error = {
        message: `Hubo un problema al procesar tu petición. Por favor intenta nuevamente más tarde.`,
        url: response?.url,
        status: +response?.status,
        statusText: response?.statusText,
        data: response?.data,
      };

      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
);

export default http;
