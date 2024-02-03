import React from "react";
import { MdOutlineAddBusiness } from "react-icons/md";
// components
import CustomButton from "@/components/commons/CustomButton";
import CustomTab from "../../commons/CustomTab";

const RolSelectForm = () => {
  return (
    <form className="base-form">
      <h2 className="text-3xl text-center whitespace-pre font-semibold leading-none tracking-tight text-gray-900 md:text-4xl">
        ¿Cómo deseas registrarte?
      </h2>
      <p className="text-lg text-center opacity-70 ">
        Elige ser usuario o vendedor, completa el registro y únete a nosotros
      </p>
      <div className="w-full flex flex-col lg:flex-row gap-6 lg:gap-8 items-center justify-center">
        <CustomTab withDefaultIcon name="pepe" label="asd">
          <span className="text-xl font-medium text-center">Usuario</span>
          <span className="text-xs font-medium text-center">
            Cuenta para el consumista
          </span>
        </CustomTab>
        <CustomTab name="pepe" label="asd">
          <MdOutlineAddBusiness className="text-5xl" />
          <span className="text-xl font-medium text-center">Vendedor</span>
          <span className="text-xs font-medium text-center">
            Cuenta para el vendedor
          </span>
        </CustomTab>
      </div>
      <CustomButton
        type="submit"
        withNext
        classAditional="bg-secondary text-white w-48 lg:w-56"
      >
        Siguiente
      </CustomButton>
    </form>
  );
};

export default RolSelectForm;
