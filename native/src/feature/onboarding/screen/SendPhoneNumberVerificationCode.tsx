import { QuerySendPhoneNumberVerificationCodeArgs } from "@corecodeio/libraries/api";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, TextInput } from "react-native";
import { PrimaryButton } from "../../../common/component/button";
import { View } from "../../../common/component/view";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import { OnboardingInjectionKey } from "../InjectionKey";

type Props = {
  navigation: StackNavigationProp<
    OnboardingStackParamList,
    OnboardingStackScreenName.SendPhoneNumberVerificationCode
  >;
};

export const SendPhoneNumberVerificationCode: React.FC<Props> = ({
  navigation,
}) => {
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
    queryResult: { error: sendPhoneNumberVerificationCodeError },
  } = onboarding.useSendPhoneNumberVerificationCode();

  React.useEffect(() => {
    if (!Boolean(result) || !result.valueOf()) {
      return;
    }

    navigation.navigate(OnboardingStackScreenName.VerifyPhoneNumberCode);
  }, [result]);

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
    <View container flex={1} justifyContent="center">
      <TextInput
        value={args.input.phoneNumber}
        autoFocus
        onChangeText={onSetPhoneNumber}
        placeholder={"+502 1234 56 78"}
      />
      {sendPhoneNumberVerificationCodeError && (
        <Text>Error al enviar el SMS. Intenta de nuevo.</Text>
      )}
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Continuar
      </PrimaryButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
