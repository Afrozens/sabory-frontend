"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
// components
import TextField from "@/components/commons/TextField";
import CustomButton from "@/components/commons/CustomButton";

const SubscribeForm = () => {
  return (
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
        classAditional="bg-secondary text-white "
      >
        Subscribirse
      </CustomButton>
      <MdOutlineMail className="absolute top-1/2 -translate-y-1/2 left-2 text-2xl opacity-80 text-gray-500" />
    </form>
  );
};

export default SubscribeForm;
