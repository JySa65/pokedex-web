import { NextResponse } from "next/server";

interface IResponseDefault {
  msg?: string;
  payload?: Record<string, unknown>;
  onlyJson?: boolean;
}

class CustomResponse {
  msg?: string;
  payload?: Record<string, unknown>;
  onlyJson?: boolean;

  constructor({ msg, payload, onlyJson = false }: IResponseDefault) {
    this.msg = msg;
    this.payload = payload;
    this.onlyJson = onlyJson || false;
  }

  private response(status: number, msg: string) {
    if (this.onlyJson) {
      return JSON.stringify({
        status,
        msg: this.msg || msg,
        payload: this.payload || {},
      });
    }

    if (status === 204) {
      return new Response(null, {
        status,
      });
    }

    return NextResponse.json(
      {
        status,
        msg: this.msg || msg,
        payload: this.payload || {},
      },
      {
        status,
      }
    );
  }

  http200() {
    return this.response(200, "OK");
  }

  http201() {
    return this.response(201, "Created");
  }

  http204() {
    return this.response(204, "No Content");
  }

  http400() {
    return this.response(400, "Bad Request");
  }

  http401() {
    return this.response(401, "Unauthorized");
  }

  http403() {
    return this.response(403, "Forbidden");
  }

  http404() {
    return this.response(404, "Not Found");
  }

  http405() {
    return this.response(405, "Method Not Allowed");
  }
}

export default CustomResponse;
