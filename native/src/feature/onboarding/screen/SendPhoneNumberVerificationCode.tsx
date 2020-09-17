import { QuerySendPhoneNumberVerificationCodeArgs } from "@corecodeio/libraries/api";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import {
  FooterText,
  FooterView,
  PrimaryText,
  SecondaryText,
  TertiaryText,
  View,
} from "../../../common/component";
import { PrimaryButton } from "../../../common/component/Button";
import { DependencyContext } from "../../../common/context/DependencyContext";
import { OnboardingStackScreenName } from "../../../navigation/model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../../../navigation/types/OnboardingStackParamList";
import IntlTelInput from "../component/IntlTelInput";
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
      <PrimaryText>MariaApp</PrimaryText>
      <SecondaryText paddingTop={30}>
        Selecciona tu código de país e ingresa tu numero de teléfono
      </SecondaryText>
      <IntlTelInput onSetPhoneNumber={onSetPhoneNumber} />
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
      <TertiaryText>
        Al crear tu cuenta aceptas los Términos y Condiciones
      </TertiaryText>
      <FooterView container>
        <FooterText>¿Ya tienes cuenta?</FooterText>
      </FooterView>
    </View>
  );
};

export default SendPhoneNumberVerificationCode;
