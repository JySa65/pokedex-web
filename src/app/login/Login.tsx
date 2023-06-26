"use client";

import "twin.macro";
import { MdAlternateEmail, MdLockOutline } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { Loader, Input } from "@/src/Components/";
import { useLogin } from "@/src/hooks/";

const Login = () => {
  const {
    form,
    showPassword,
    isLoading,
    error,
    setShowPassword,
    handleOnBlur,
    handleOnChange,
    handleOnSubmit,
  } = useLogin();

  const renderContent = () => {
    if (isLoading) {
      return <Loader isModal />;
    }

    return (
      <form tw="w-[90%]" method="post" onSubmit={handleOnSubmit}>
        <h1 tw="text-gray-800 font-bold text-2xl mb-1">Hola PokeHumano!</h1>
        <p tw="text-sm font-normal text-gray-600 mb-8">Bienvenido</p>
        <Input
          leftIcon={<MdAlternateEmail tw="h-5 w-5 text-gray-400" />}
          id="email"
          value={form.email}
          type="email"
          name="email"
          placeholder="Correro Electronico"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          error={error.email}
        />

        <Input
          leftIcon={<MdLockOutline tw="h-5 w-5 text-gray-400" />}
          type={showPassword ? "text" : "password"}
          name="password"
          id="password"
          value={form.password}
          placeholder="Contraseña"
          onBlur={handleOnBlur}
          onChange={handleOnChange}
          error={error.password}
          rightIcon={
            <button
              id="showPassword"
              type="button"
              tw="outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {!showPassword ? (
                <AiOutlineEyeInvisible tw="h-5 w-5 text-gray-400" />
              ) : (
                <AiOutlineEye tw="h-5 w-5 text-gray-400" />
              )}
            </button>
          }
        />

        <button
          type="submit"
          disabled={isLoading || !form.email || !form.password}
          tw="block w-full disabled:opacity-25 focus:outline-none bg-red-500 mt-5 py-2 rounded-2xl hover:bg-red-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
        >
          Iniciar Sesión
        </button>
      </form>
    );
  };

  return (
    <div tw="grid place-items-center h-screen md:bg-login bg-no-repeat bg-cover px-14 md:px-0">
      <div tw="md:h-screen absolute md:w-screen md:bg-black md:opacity-70 " />
      <div tw="flex flex-col items-center justify-center w-full md:w-96 md:h-96 bg-white rounded-lg shadow-2xl z-10 p-5">
        {renderContent()}
      </div>
    </div>
  );
};

export default Login;
