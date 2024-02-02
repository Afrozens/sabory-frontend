import React from "react";
// components
import Footer from "@/components/general/Footer";
import Header from "@/components/general/Header";

interface Props extends React.PropsWithChildren {}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="flex-1 w-full min-h-screen bg-quaternary overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default GuestLayout;
