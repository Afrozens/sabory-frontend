import React, { Fragment } from "react";

type typeMaxWith = "sm" | "md" | "lg" | "xl" | "2xl";

interface Props extends React.PropsWithChildren {
  show: boolean;
  maxWidth: typeMaxWith;
  isLoading: boolean;
  classAditional: string;
  closeable?: boolean;
  onClose: () => void;
}

const Modal = ({
  children,
  isLoading,
  classAditional = "h-full",
  show = false,
  maxWidth = "2xl",
  closeable = true,
  onClose = () => {},
}: Props) => {
  const close = () => {
    if (closeable) {
      onClose();
    }
  };

  const maxWidthClass = {
    sm: "md:max-w-sm",
    md: "md:max-w-md",
    lg: "md:max-w-lg",
    xl: "md:max-w-xl",
    "2xl": "md:max-w-2xl",
  }[maxWidth];

  //   fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all

  // mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto

  return (
    <>
      {show ? (
        <>
          <div
            onClick={close}
            className="fixed bg-gray-800 opacity-30 inset-0 transition-all overflow-y-auto px-4 py-6 sm:px-0 z-40 w-full h-full"
          />
          <div
            className={`fixed w-[90%]  animate-duration-500 animate-fade animate-ease-in inset-0 flex overflow-y-auto px-4 py-6 sm:px-5 items-center z-50 transform transition-all bg-quaternary rounded-xl ${maxWidthClass} ${classAditional}`}
          >
            {children}
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
