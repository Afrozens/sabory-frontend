import React from "react";
import Image from "next/image";

type Props = {} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Logotype = ({ ...props }: Props) => {
  return (
    <div className="w-full flex items-center gap-3 " {...props}>
      <Image
        width={45}
        height={45}
        src="/icons/sabory.png"
        alt="sabory app main logotype"
      />
      <span className="hidden sm:block text-xl font-semibold text-primary -ml-2 -mb-2 md:text-2xl">
        Sabory
      </span>
    </div>
  );
};

export default Logotype;
