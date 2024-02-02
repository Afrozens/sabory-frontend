import React from "react";
import Image from "next/image";
import { HiMenuAlt2 } from "react-icons/hi";
// components
import CustomButton from "@/components/commons/CustomButton";

const Header = () => {
  return (
    <header className="w-full h-16 px-4 flex justify-between items-center bg-quaternary">
      <div className="w-full flex items-center ">
        <Image
          width={64}
          height={64}
          src="/svg/sabory.svg"
          alt="sabory app main logotype"
        />
        <span className="text-xl font-semibold text-primary -ml-2 md:text-2xl">
          Sabory
        </span>
      </div>
      <div className="w-full flex items-center gap-1 flex-1 ">
        <CustomButton classAditional="whitespace-pre -mr-2 md:-mr-0 bg-transparent text-gray-800 text-xs hover:opacity-80 md:text-base">
          Inicia sesión
        </CustomButton>
        <CustomButton classAditional="bg-primary text-xs text-white hover:opacity-80 md:text-base">
          Registrate
        </CustomButton>
        <button className="md:hidden">
          <HiMenuAlt2 className="text-4xl text-gray-600 " />
        </button>
      </div>
    </header>
  );
};

export default Header;
