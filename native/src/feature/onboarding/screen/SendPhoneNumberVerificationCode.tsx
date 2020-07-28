import React from "react";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../common/component/button";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
  return (
    <>
      <PrimaryButton onPress={() => {}}>Send Code</PrimaryButton>
      <SecondaryButton>Send Code</SecondaryButton>
    </>
  );
};

export default SendPhoneNumberVerificationCode;
