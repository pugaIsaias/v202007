import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

type Props = { onSetPhoneNumber: (text: string) => void };

const IntlTelInput: React.FC<Props> = ({ onSetPhoneNumber }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const onChangePhoneNumber = (number: string) => {
    setPhoneNumber(number);
    {
      isValidPhoneNumber(number)
        ? onSetPhoneNumber(number)
        : onSetPhoneNumber("");
    }
  };
  return (
    <PhoneInput
      placeholder="Enter phone number"
      value={phoneNumber}
      onChange={onChangePhoneNumber}
      defaultCountry="GT"
    />
  );
};

export default IntlTelInput;
