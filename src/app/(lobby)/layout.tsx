import React from "react";

interface Props extends React.PropsWithChildren {}

const GuestLayout = ({ children }: Props) => {
  return (
    <>
      <main className="flex-1 w-full min-h-screen px-5 bg-quaternary">
        {children}
      </main>
    </>
  );
};

export default GuestLayout;
