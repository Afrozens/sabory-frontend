import React from "react";

type typeArrow = "left" | "right";

interface Props extends React.PropsWithChildren {
  direction: typeArrow;
}

const ButtonCarousel = ({ children, direction }: Props) => {
  const directionClass =
    direction === "left" ? "left-4 md:-left-0" : "right-4 md:-right-0";
  return (
    <button
      className={`z-10 h-10 w-10 cursor-pointer items-center justify-center flex rounded-full shadow-md absolute transition-all bg-white hover:bg-gray-200 ${directionClass}`}
    >
      {children}
    </button>
  );
};

export default ButtonCarousel;
