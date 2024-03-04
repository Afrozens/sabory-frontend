"use client";

import { typeStepperLobby } from "@/models/stepper";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
interface Props {
  children: React.ReactNode | React.ReactNode[];
}
interface Values {
  step: typeStepperLobby;
  setStep: Dispatch<SetStateAction<typeStepperLobby>>;
}

const StepperContext = createContext({} as Values);

export function useStepper() {
  return useContext(StepperContext);
}

export const StepperProvider = ({ children }: Props) => {
  const [step, setStep] = useState<typeStepperLobby>("start");

  const values = { step, setStep } as Values;

  return (
    <StepperContext.Provider value={values}>{children}</StepperContext.Provider>
  );
};

export default StepperContext;
