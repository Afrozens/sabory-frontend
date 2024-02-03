"use client";

import React, { Dispatch, SetStateAction, useRef } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

interface Props {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
}

const Hcaptcha = ({ setToken, token }: Props) => {
  const captchaRef = useRef(null);

  const onLoad = () => {
    if (captchaRef.current) {
      (captchaRef.current as HCaptcha)?.execute();
    }
  };
  return (
    <HCaptcha
      sitekey="your-sitekey"
      onLoad={onLoad}
      onVerify={setToken}
      ref={captchaRef}
    />
  );
};

export default Hcaptcha;
