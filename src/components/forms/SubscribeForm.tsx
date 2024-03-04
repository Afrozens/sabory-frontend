"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
// components
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";
import CustomCheckbox from "../commons/CustomCheckbox";

const SubscribeForm = () => {
  return (
    <>
      <form className="w-full relative flex gap-4">
        <TextField
          label=""
          placeholder="Escribe tu correo elétronico"
          classAditional="pl-9"
          type="text"
          id="email"
        />
        <CustomButton
          type="submit"
          withNext
          classAditional="bg-secondary text-white hover:opacity-80 transition-all"
        >
          Subscribirse
        </CustomButton>
        <MdOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl opacity-80 text-gray-500" />
      </form>
      <div className="mt-1 flex gap-1 items-center">
        <CustomCheckbox />
        <label htmlFor="">
          <small className="text-[9px] md:text-[10px]">
            Declaro que he leído y acepto la política de tratamiento de datos
            personales.
          </small>
        </label>
      </div>
    </>
  );
};

export default SubscribeForm;
