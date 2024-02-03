import React from "react";

const CustomHr = ({ title }: { title: string }) => {
  return (
    <div className="inline-flex items-center justify-center w-full relative">
      <hr className="w-full h-1 my-2 bg-gray-300 border-0 rounded lg:w-72" />
      <div className="absolute flex flex-col justify-center items-center text-xs font-semibold text-gray-400 px-4 -translate-x-1/2 bg-quaternary left-1/2">
        <span>O</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CustomHr;
