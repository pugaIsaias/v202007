import { MutationVerifyPhoneNumberCodeArgs } from "@corecodeio/libraries/api";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { FooterView, View } from "../../../common/component";
import {
  FooterText,
  PrimaryText,
  SecondaryText,
} from "../../../common/component/Text";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import CodeInput from "../component/CodeInput";
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

  const [args, setInput] = React.useState<MutationVerifyPhoneNumberCodeArgs>({
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
    setInput({ input: { phoneNumber: args.input.phoneNumber, code } });
  };

  const onSendPhoneNumberVerificationCode = async () => {
    await executeVerifyPhoneNumberCode(args);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          container
          flex={1}
          justifyContent="space-around"
          onPress={Keyboard.dismiss}
        >
          <PrimaryText>MariaApp</PrimaryText>
          <SecondaryText paddingTop={30}>
            Introduce el código que hemos enviado a tu{"\n"}
            número +502 01020304
          </SecondaryText>
          <CodeInput onChangeText={onSetVerificationCode} />
          <FooterView container>
            <FooterText>¿Ya tienes cuenta?</FooterText>
          </FooterView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default VerifyPhoneNumberCode;
