"use client";

import React from "react";
import { IoPeopleOutline } from "react-icons/io5";
import type { RegisterOptions, UseFormRegister } from "react-hook-form";

type AttributeProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

type Props = {
  children: React.ReactNode;
  label: string;
  name: string;
  withDefaultIcon?: boolean;
  register?: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
  isSelect?: boolean;
} & AttributeProps;

const SelectTab = ({
  children,
  label,
  name,
  withDefaultIcon,
  register,
  error,
  rules,
  isSelect,
  ...props
}: Props) => {
  return (
    <label
      htmlFor={label}
      className={`${
        isSelect
          ? "border-secondary text-gray-600 bg-quaternary"
          : "bg-white border-gray-300 text-gray-800"
      } h-40  w-56 flex justify-center shadow-sm items-center transition-all border  hover:bg-quaternary hover:border-secondary mb-3 rounded-md px-4 py-2 cursor-pointer`}
    >
      <div className="flex gap-2 items-center flex-col">
        {withDefaultIcon && <IoPeopleOutline className="text-5xl" />}
        {children}
      </div>
      <input
        type="radio"
        className="h-0 w-0 hidden"
        id={label}
        {...(register && register(name as string, rules))}
        {...props}
        name={name}
      />
      {error && (
        <p className="mt-1 ml-1 text-xs text-red-500 self-start">{error}</p>
      )}
    </label>
  );
};

export default SelectTab;
