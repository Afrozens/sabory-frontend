import React, { PropsWithChildren } from "react";
import { StepperProvider } from "@/contexts/auth/stepperContext";

interface Props extends PropsWithChildren {}

const Providers = ({ children }: Props) => {
  return <StepperProvider>{children}</StepperProvider>;
};

export default Providers;
