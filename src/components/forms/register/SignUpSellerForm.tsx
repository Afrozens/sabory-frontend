"use client";

import React, { useState } from "react";
// components
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";
import CustomCheckbox from "@/components/commons/CustomCheckbox";
import CustomInputPhone from "@/components/commons/CustomInputPhone";
import Hcaptcha from "@/components/commons/Hcaptcha";

const SignUpSellerForm = () => {
  const [token, setToken] = useState("");
  return (
    <form className="base-form">
      <h2 className="text-3xl text-center whitespace-pre font-semibold leading-none tracking-tight text-gray-900 md:text-4xl">
        ¡Únete a nuestra comunidad!
      </h2>
      <p className="text-lg -mt-4 text-center opacity-70 ">
        Aquí podrás crear tu cuenta y empezar a disfrutar de todos los
        beneficios que ofrecemos.
      </p>
      <TextField label="Nombre" placeholder="Sabory" type="text" id="name" />
      <TextField label="Rif" placeholder="j-xxxx-xxx" type="text" id="rif" />
      {/* <CustomInputPhone
        label="Número teléfonico"
        id="phoneNumber"
        name="phone"
      /> */}
      <TextField label="Dirección" placeholder="Sabory" type="text" id="name" />
      <TextField
        label="Correo elétronico"
        placeholder="example@sabory.es"
        type="text"
        id="email"
      />
      <div className="flex justify-between items-center gap-2 w-full">
        <TextField
          label="Contraseña"
          placeholder="••••••••"
          type="password"
          id="password"
        />
        <TextField
          label="Confirma Contraseña"
          placeholder="••••••••"
          type="password"
          id="confirmPassword"
        />
      </div>
      <label htmlFor="cbx" className="flex gap-2 cursor-pointer w-full">
        <CustomCheckbox />
        <span className="text-xs text-gray-500">
          Acepto los terminos y condiciones
        </span>
      </label>
      <Hcaptcha setToken={setToken} token={token} />
      <div className="flex justify-between items-center gap-4 mt-2">
        <CustomButton
          type="button"
          classAditional="bg-gray-400 text-white w-40"
        >
          Volver
        </CustomButton>
        <CustomButton
          type="submit"
          withNext
          classAditional="bg-secondary text-white w-40"
        >
          Registrate
        </CustomButton>
      </div>
    </form>
  );
};

export default SignUpSellerForm;
