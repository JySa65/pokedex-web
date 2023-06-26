import { ChangeEvent, SyntheticEvent, use, useState } from "react";
import { theme } from "twin.macro";
import { useRouter } from "next/navigation";
import { SignInResponse, signIn } from "next-auth/react";
import Swal from "sweetalert2";

const inputEs: Record<string, string> = {
  email: "Correo electronico requerido",
  password: "Contraseña requerida",
};

export default function useLogin() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const isValidForm = (name: string, value: string) => {
    if (!value) {
      setError((prev) => ({
        ...prev,
        [name]: inputEs[name],
      }));
      return false;
    }
    setError((prev) => ({ ...prev, [name]: "" }));
    return true;
  };

  const handleOnBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    return isValidForm(name, value);
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    return isValidForm(name, value);
  };

  const handleOnSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const { email, password } = form;

    const isValidEmail = isValidForm("email", email);
    const isValidPassword = isValidForm("password", password);

    if (!isValidEmail && !isValidPassword) {
      return;
    }

    setIsLoading(true);
    try {
      const { error } = (await signIn("login", {
        email,
        password,
        callbackUrl: "/",
        redirect: false,
      })) as SignInResponse;

      if (error) {
        throw new Error(error);
      }

      router.push("/");
      return Swal.fire({
        icon: "success",
        title: "Bienvenido",
        text: "Inicio de sesión exitoso",
        timer: 3000,
      });
    } catch (error: any) {
      const { message } = error;
      const { msg } = JSON.parse(message);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
        confirmButtonColor: theme`colors.red.500`,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return {
    form,
    showPassword,
    isLoading,
    error,
    setShowPassword,
    handleOnBlur,
    handleOnChange,
    handleOnSubmit,
  };
}
