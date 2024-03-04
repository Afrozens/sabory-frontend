"use client";

import React from "react";
import { MdOutlineAddBusiness } from "react-icons/md";
// components
import CustomButton from "@/components/commons/CustomButton";
import CustomTab from "../../commons/CustomTab";
import { useStepper } from "@/contexts/auth/stepperContext";

const RolSelectForm = () => {
  const { setStep } = useStepper();
  return (
    <div className="base-form">
      <h2 className="text-3xl text-center whitespace-pre font-semibold leading-none tracking-tight text-gray-900 md:text-4xl">
        ¿Cómo deseas registrarte?
      </h2>
      <p className="text-lg text-center opacity-70 ">
        Elige ser usuario o vendedor, completa el registro y únete a nosotros
      </p>
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
        <CustomTab
          onClick={() => setStep("consumer")}
          withDefaultIcon
          name="consumer"
          label="consumer"
        >
          <span className="text-xl font-medium text-center">Usuario</span>
          <span className="text-xs font-medium text-center">
            Cuenta para el consumista
          </span>
        </CustomTab>
        <CustomTab onClick={() => setStep("store")} name="store" label="store">
          <MdOutlineAddBusiness className="text-5xl" />
          <span className="text-xl font-medium text-center">Vendedor</span>
          <span className="text-xs font-medium text-center">
            Cuenta para el vendedor
          </span>
        </CustomTab>
      </div>
    </div>
  );
};

export default RolSelectForm;
