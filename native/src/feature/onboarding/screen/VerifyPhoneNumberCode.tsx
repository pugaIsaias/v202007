import { QueryVerifyPhoneNumberCodeArgs } from "@corecodeio/libraries/api";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Alert, Text, TextInput } from "react-native";
import { PrimaryButton } from "../../../common/component/button";
import { View } from "../../../common/component/view";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import { OnboardingInjectionKey } from "../InjectionKey";

type Props = {
  navigation: StackNavigationProp<
    OnboardingStackParamList,
    OnboardingStackScreenName.VerifyPhoneNumberCode
  >;
  route: RouteProp<
    OnboardingStackParamList,
    OnboardingStackScreenName.VerifyPhoneNumberCode
  >;
};

export const VerifyPhoneNumberCode: React.FC<Props> = ({
  route,
  navigation,
}) => {
  const dependencies = React.useContext(DependencyContext);
  const onboarding = dependencies.provide(OnboardingInjectionKey);

  const [args, setInput] = React.useState<QueryVerifyPhoneNumberCodeArgs>({
    input: {
      phoneNumber: route.params.phoneNumber,
      code: "",
    },
  });

  const {
    executeVerifyPhoneNumberCode,
    result,
    error,
  } = onboarding.useVerifyPhoneNumberCode();

  React.useEffect(() => {
    if (!Boolean(result)) {
      return;
    }

    // navigation.navigate(OnboardingStackScreenName.VerifyPhoneNumberCode);
  }, [result]);

  React.useEffect(() => {
    if (!Boolean(error)) {
      return;
    }

    handleError();
  }, [error]);

  const handleError = () => {
    Alert.alert("Oops!", error?.message, [
      { text: "Entendido", onPress: () => null },
    ]);
  };

  const onSetVerificationCode = (code: string) => {
    let phoneNumber = args.input.phoneNumber;
    setInput({ input: { phoneNumber, code } });
  };

  const onSendPhoneNumberVerificationCode = async () => {
    await executeVerifyPhoneNumberCode(args);
  };

  return (
    <View container flex={1} justifyContent="center">
      <TextInput
        value={args.input.code}
        autoFocus
        onChangeText={onSetVerificationCode}
        placeholder={"CheckCode"}
      />
      {error && <Text>Error PIN equivocado. Intenta de nuevo.</Text>}
      <PrimaryButton mb={4} onPress={onSendPhoneNumberVerificationCode}>
        Continuar
      </PrimaryButton>
    </View>
  );
};

export default VerifyPhoneNumberCode;
