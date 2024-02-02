import React, { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { RiLoader5Line } from "react-icons/ri";

type Props = {
  children: React.ReactNode;
  classAditional: string;
  withNext?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const ButtonPrimary: FC<Props> = ({
  children,
  classAditional,
  withNext,
  type = "button",
  loading = false,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      className={`${classAditional} btn-main-translate cursor-pointer py-2 px-4 flex justify-center gap-2 text-sm font-semibold items-center transition-all border-0 rounded-[20px]`}
    >
      {loading ? (
        <RiLoader5Line className="animate-spin text-xl" />
      ) : (
        <>
          {children}
          {withNext && (
            <IoIosArrowForward className="transition-all btn-translate text-lg" />
          )}
        </>
      )}
    </button>
  );
};

export default ButtonPrimary;
