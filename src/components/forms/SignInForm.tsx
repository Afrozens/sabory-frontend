"use client";

import React from "react";

//components
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";
import CustomCheckbox from "../commons/CustomCheckbox";
import CustomHr from "../commons/CustomHr";
import ButtonSocial from "../general/auth/ButtonSocial";
import Link from "next/link";

const SignInForm = () => {
  return (
    <form className="w-full flex flex-col gap-4 justify-center items-center">
      <h4 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
        Iniciar Sesión Para Continuar
      </h4>
      <ButtonSocial />
      <CustomHr withOr title="correo/contraseña" />
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
          <span className="text-xs text-gray-700">Recordar</span>
        </label>
        <small className="opacity-80 font-light self-end text-xs text-gray-700">
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
        ¿Aún no tienes una cuenta?{" "}
        <b className="text-secondary hover:opacity-80 transition-all">
          <Link href="/registrarse">Registrate</Link>
        </b>
      </small>
    </form>
  );
};

export default SignInForm;
