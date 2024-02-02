"use client";

import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
//components
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";
import CustomCheckbox from "../commons/CustomCheckbox";

const SignInForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 justify-center items-center">
      <h4 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Inicia sesión{" "}
      </h4>
      <CustomButton classAditional="bg-[#1877F2] w-60 hover:opacity-90 h-10">
        <span className="text-white items-center flex gap-2">
          <FaFacebook className="text-xl" />
          Continua con Facebook
        </span>
      </CustomButton>
      <CustomButton classAditional="bg-white w-60 hover:opacity-90 h-10">
        <span className="text-gray-500 justify-between items-center flex gap-2 mr-4">
          <FcGoogle className="text-xl" />
          Continua con Google
        </span>
      </CustomButton>
      <div className="inline-flex items-center justify-center w-full">
        <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded " />
        <div className="absolute flex flex-col justify-center items-center text-xs font-semibold text-gray-400 px-4 -translate-x-1/2 bg-quaternary left-1/2">
          <span>O</span>
          <span>correo/contraseña</span>
        </div>
      </div>
      <TextField
        label="Correo elétronico"
        placeholder="example@sabory.es"
        type="text"
        id="email"
      />
      <TextField
        label="Contraseña"
        placeholder="••••••••"
        type="password"
        id="password"
      />
      <div className="w-full flex justify-between items-center">
        <label htmlFor="cbx" className="flex gap-2 cursor-pointer">
          <CustomCheckbox />
          <span className="text-xs text-gray-500">Recordar</span>
        </label>
        <small className="opacity-80 font-light self-end text-xs">
          ¿Haz olvidado tu contraseña?
        </small>
      </div>

      <CustomButton
        type="submit"
        withNext
        classAditional="bg-secondary text-white w-40"
      >
        Iniciar sesión
      </CustomButton>
      <small className="text-gray-500">
        ¿Ya tienes una cuenta? <b className="text-secondary">Registrate</b>
      </small>
    </form>
  );
};

export default SignInForm;
