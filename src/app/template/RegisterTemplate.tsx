"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
// components
import RolSelectForm from "@/components/forms/register/RolSelectForm";
import SignUpSellerForm from "@/components/forms/register/SignUpSellerForm";
import SignUpUserForm from "@/components/forms/register/SignUpUserForm";
// hooks
import { useStepper } from "@/contexts/auth/stepperContext";
import { typeStepperLobby } from "@/models/stepper";

const RegisterTemplate = () => {
  const [Form, setForm] = useState<React.JSX.Element | null>();
  const { step } = useStepper();

  const actionsStepper = useMemo(
    () => ({
      start: RolSelectForm,
      consumer: SignUpUserForm,
      store: SignUpSellerForm,
    }),
    []
  );

  const handleLayout = useCallback(
    (stepCurrent: typeStepperLobby) => {
      const ComponentToRender = actionsStepper[stepCurrent];
      return ComponentToRender ? <ComponentToRender /> : null;
    },
    [actionsStepper]
  );

  useEffect(() => {
    console.log(step);
    const Component = handleLayout(step);
    setForm(Component);
  }, [step, handleLayout]);

  return <>{Form || <RolSelectForm />}</>;
};

export default RegisterTemplate;
