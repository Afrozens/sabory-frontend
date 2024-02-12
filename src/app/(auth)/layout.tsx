import React from "react";
//components
import Logotype from "@/components/general/Logotype";
import CustomBreadCrumbs from "@/components/commons/CustomBreadCrumbs";

interface Props extends React.PropsWithChildren {}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <main className="flex-1 w-full min-h-screen bg-quaternary overflow-x-hidden lg:flex lg:px-6 lg:justify-center lg:h-screen lg:items-center">
        <article className="w-full flex justify-between flex-col">
          {/* carousel */}
          <CustomBreadCrumbs />
          <section className="hidden lg:block bg-secondary w-full h-[90vh] lg:rounded-3xl"></section>
        </article>
        <article className="w-full bg-quaternary min-h-screen">
          <header className="w-full h-16 pt-4 bg-quaternary px-4 flex justify-between items-center lg:pt-0">
            <Logotype />
            <span className="opacity-60 whitespace-pre">¿Necesitas ayuda?</span>
          </header>
          {children}
        </article>
      </main>
    </>
  );
};

export default GuestLayout;
