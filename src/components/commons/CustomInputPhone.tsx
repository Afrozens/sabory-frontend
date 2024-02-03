import React from "react";
import PhoneInput, { PhoneInputProps } from "react-phone-input-2";
import type { ControllerRenderProps } from "react-hook-form";

type AttributeProps = PhoneInputProps;

type Props = {
  label: string;
  id: string;
  isRequired?: boolean;
  name?: string;
  error?: string | undefined;
  field?: ControllerRenderProps<any, string>;
} & AttributeProps;

const CustomInputPhone = ({
  label,
  isRequired,
  id,
  error,
  name,
  field,
  ...props
}: Props) => {
  return (
    <div className="flex flex-col w-full">
      <label className="label-primary" htmlFor={id}>
        {label}
        {isRequired && <b className="text-red-500 ">*</b>}
      </label>
      <PhoneInput
        placeholder="Ingresa tu número teléfonico"
        {...props}
        {...field}
      />
      {error && (
        <p className="mt-1 ml-1 text-xs text-red-500 self-start ">{error}</p>
      )}
    </div>
  );
};

export default CustomInputPhone;
