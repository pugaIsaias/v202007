import { QuerySendPhoneNumberVerificationCodeArgs } from "@corecodeio/libraries/api";
import React from "react";
import { TextInput } from "react-native";
import { PrimaryButton } from "../../../common/component/button";
import { View } from "../../../common/component/view";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingInjectionKey } from "../InjectionKey";

export const SendPhoneNumberVerificationCode: React.FC<{}> = () => {
  const dependencies = React.useContext(DependencyContext);
  const onboarding = dependencies.provide(OnboardingInjectionKey);

  const [args, setInput] = React.useState<
    QuerySendPhoneNumberVerificationCodeArgs
  >({
    input: {
      phoneNumber: "",
    },
  });

  const {
    executeSendPhoneNumberVerificationCode,
    result,
    queryResult,
  } = onboarding.useSendPhoneNumberVerificationCode();

  const onSetPhoneNumber = (phoneNumber: string) => {
    setInput({ input: { phoneNumber } });
  };

  const onSendPhoneNumberVerificationCode = async () => {
    try {
      await executeSendPhoneNumberVerificationCode(args);
    } catch (error) {
      // TODO handle error
    }
  };

  return (
    <View container flex={1} justifyContent="center" bg="blue">
      <TextInput
        value={args.input.phoneNumber}
        autoFocus
        onChangeText={onSetPhoneNumber}
        placeholder={"+502 1234 56 78"}
      />
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Send Codes
      </PrimaryButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
