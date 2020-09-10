import { QuerySendPhoneNumberVerificationCodeArgs } from "@corecodeio/libraries/api";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import { View } from "../../../common/component";
import { PrimaryButton } from "../../../common/component/Button";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import PhoneNumberInput from "../component/IntlTelInput";
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
    if (!Boolean(result)) {
      return;
    }

    navigation.navigate(OnboardingStackScreenName.VerifyPhoneNumberCode, {
      phoneNumber: args.input.phoneNumber,
    });
  }, [result]);

  const onSetPhoneNumber = (phoneNumber: string) => {
    setInput({ input: { phoneNumber } });
    console.log(phoneNumber);
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
      <PhoneNumberInput onSetPhoneNumber={onSetPhoneNumber} />
      {sendPhoneNumberVerificationCodeError && (
        <Text>Error al enviar el SMS. Intenta de nuevo.</Text>
      )}
      <PrimaryButton
        mb={4}
        onPress={onSendPhoneNumberVerificationCode}
        disabled={!args.input.phoneNumber}
      >
        Continuar
      </PrimaryButton>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
