import React from "react";
import RegisterTemplate from "@/app/template/RegisterTemplate";
import Link from "next/link";

const RegisterPage = () => {
  return (
    <section className="w-full flex-col bg-quaternary flex justify-start items-center gap-4 lg:justify-center lg:h-[calc(100vh-68px)]">
      <RegisterTemplate />
      <small className="text-gray-500">
        ¿Ya tienes una cuenta?{" "}
        <b className="text-secondary hover:opacity-80 transition-all">
          <Link href="/?login">Inicia sesión</Link>
        </b>
      </small>
    </section>
  );
};

export default RegisterPage;
