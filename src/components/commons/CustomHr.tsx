import React from "react";

interface Props {
  classAditional?: string;
  title?: string;
  withOr?: boolean;
}

const CustomHr = ({
  title,
  classAditional = "bg-gray-300 w-full lg:w-72",
  withOr = false,
}: Props) => {
  return (
    <div className="inline-flex items-center justify-center w-full relative">
      <hr className={`${classAditional} h-1 my-2 border-0 rounded`} />
      {withOr && (
        <div className="absolute flex flex-col justify-center items-center text-xs font-semibold text-gray-400 px-4 -translate-x-1/2 bg-quaternary left-1/2">
          <span>O</span>
          <span>{title}</span>
        </div>
      )}
    </div>
  );
};

export default CustomHr;
