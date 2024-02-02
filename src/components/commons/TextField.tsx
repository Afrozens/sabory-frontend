"use client";

import React, { useState } from "react";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type typeInput = "text" | "password" | "number" | "email" | "";

type Props = {
  id: string;
  label: string;
  classAditional?: string;
  name?: string;
  register?: UseFormRegister<any>;
  error?: string | undefined;
  rules?: RegisterOptions;
  type: typeInput;
  isRequired?: boolean;
} & AttributeProps;

const CustomInput = ({
  label,
  id,
  isRequired,
  classAditional,
  type,
  name,
  rules,
  error,
  register,
  ...props
}: Props) => {
  const [currentType, setCurrentType] = useState<typeInput>(type);

  const handlePassword = () => {
    const typeIn = currentType === "password" ? "text" : "password";
    setCurrentType(typeIn);
  };

  return (
    <div className="flex items-center justify-center flex-col w-full">
      <label className="label-primary" htmlFor={id}>
        {label}
        {isRequired && <b className="text-red-500 ">*</b>}
      </label>
      <div className="relative w-full">
        <input
          id={name ?? id}
          required={isRequired}
          type={currentType}
          autoComplete="current-password"
          className={`${
            id === "password" || id === "confirmPassword" ? "pr-10" : "pr-4"
          } custom-input ${classAditional || ""}`}
          {...(register && register(name as string, rules))}
          {...props}
          name={name}
        />

        {id === "password" || id === "confirmPassword" ? (
          <button
            type="button"
            className="absolute top-2 hover:scale-110 transition-all active:scale-95  right-3 text-lg"
            onClick={handlePassword}
          >
            {currentType === type ? <FaRegEye /> : <FaRegEyeSlash />}
          </button>
        ) : null}
      </div>
      {error && (
        <p className="mt-1 ml-1 text-xs text-red-500 self-start ">{error}</p>
      )}
    </div>
  );
};

export default CustomInput;
