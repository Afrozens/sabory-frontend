import React from "react";
import { FaAngleRight } from "react-icons/fa6";

const AdGeneral = () => {
  return (
    <div className="hidden md:inline-flex animate-fade-down animate-once animate-duration-1000 animate-ease-out absolute -top-20 left-[38%] -translate-x-1/2  justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-200 z-30">
      <span className="text-xs bg-secondary rounded-full text-white px-4 py-1.5 mr-3">
        Nuevo
      </span>{" "}
      <span className="text-sm font-medium">Han aparecido nuevas ofertas</span>
      <FaAngleRight className="text-lg" />
    </div>
  );
};

export default AdGeneral;
