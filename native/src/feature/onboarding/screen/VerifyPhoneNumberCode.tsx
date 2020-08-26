import { QueryVerifyPhoneNumberCodeArgs } from "@corecodeio/libraries/api";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text, TextInput } from "react-native";
import { PrimaryButton } from "../../../common/component/button";
import { View } from "../../../common/component/view";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import { OnboardingCodeInjectionKey } from "../InjectionKey";

type Props = {
  navigation: StackNavigationProp<
    OnboardingStackParamList,
    OnboardingStackScreenName.VerifyPhoneNumberCode
  >;
};

export const VerifyPhoneNumberCode: React.FC<Props> = ({ navigation }) => {
  const dependencies = React.useContext(DependencyContext);
  const onboarding = dependencies.provide(OnboardingCodeInjectionKey);

  const [args, setInput] = React.useState<QueryVerifyPhoneNumberCodeArgs>({
    input: {
      phoneNumber: "",
      code: "",
    },
  });

  const {
    executeVerifyPhoneNumberCode,
    result,
    queryResult: { error: VerifyPhoneNumberCodeError },
  } = onboarding.useVerifyPhoneNumberCode();

  React.useEffect(() => {
    if (!Boolean(result) || !result.valueOf()) {
      return;
    }

    navigation.navigate(OnboardingStackScreenName.VerifyPhoneNumberCode);
  }, [result]);

  const onSetVerificationCode = (code: string) => {
    let phoneNumber = args.input.phoneNumber;
    setInput({ input: { phoneNumber, code } });
  };

  const onSendPhoneNumberVerificationCode = async () => {
    try {
      await executeVerifyPhoneNumberCode(args);
    } catch (error) {
      // TODO handle error
    }
  };

  return (
    <View container flex={1} justifyContent="center">
      <TextInput
        value={args.input.phoneNumber}
        autoFocus
        onChangeText={onSetVerificationCode}
        placeholder={"CheckCode"}
      />
      {VerifyPhoneNumberCodeError && (
        <Text>Error al enviar el SMS. Intenta de nuevo.</Text>
      )}
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Continuar
      </PrimaryButton>
    </View>
  );
};

export default VerifyPhoneNumberCode;
