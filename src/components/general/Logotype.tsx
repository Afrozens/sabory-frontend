import React from "react";
import Image from "next/image";

const Logotype = () => {
  return (
    <div className="w-full flex items-center ">
      <Image
        width={64}
        height={64}
        src="/svg/sabory.svg"
        alt="sabory app main logotype"
      />
      <span className="hidden sm:block text-xl font-semibold text-primary -ml-2 md:text-2xl">
        Sabory
      </span>
    </div>
  );
};

export default Logotype;
