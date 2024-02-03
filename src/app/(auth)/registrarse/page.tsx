import React from "react";
// components
import RolSelectForm from "@/components/forms/register/RolSelectForm";
import SignUpSellerForm from "@/components/forms/register/SignUpSellerForm";
import SignUpUserForm from "@/components/forms/register/SignUpUserForm";

const RegisterPage = () => {
  return (
    <section className="w-full flex-col bg-quaternary flex justify-start items-center gap-4 lg:justify-center lg:h-[calc(100vh-68px)]">
      <SignUpSellerForm />
      <small className="text-gray-500">
        ¿Ya tienes una cuenta? <b className="text-secondary">Inicia sesión</b>
      </small>
    </section>
  );
};

export default RegisterPage;
