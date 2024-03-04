import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
//components
import CustomButton from "@/components/commons/CustomButton";

const ButtonSocial = () => {
  return (
    <div className="w-full flex flex-col gap-4 lg:flex-row">
      <CustomButton classAditional="bg-[#1877F2] w-72 hover:opacity-90 h-12">
        <span className="text-white text-[15px] items-center flex gap-2">
          <FaFacebook className="text-2xl" />
          Continua con Facebook
        </span>
      </CustomButton>
      <CustomButton classAditional="bg-white w-72 hover:opacity-90 h-12">
        <span className="text-gray-500 text-[15px] justify-between items-center flex gap-2 mr-4">
          <FcGoogle className="text-2xl" />
          Continua con Google
        </span>
      </CustomButton>
    </div>
  );
};

export default ButtonSocial;
