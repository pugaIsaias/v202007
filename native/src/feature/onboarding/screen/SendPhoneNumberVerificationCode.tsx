import React from "react";
import MainActionButton from "../../../common/component/Button/MainActionButton";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
  return (
    <>
      <MainActionButton children="Send Code"/>
    </>
  );
};

export default SendPhoneNumberVerificationCode;
