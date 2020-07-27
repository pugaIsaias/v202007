import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { OnboardingStackParamList } from "../types/OnboardingStackParamList";
import {
  SendPhoneNumberVerificationCode,
  VerifyPhoneNumberCode,
} from "../../feature/onboarding/screen";

const { Navigator, Screen } = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => (
  <Navigator>
    <Screen
      name="SendPhoneNumberVerificationCode"
      component={SendPhoneNumberVerificationCode}
    />
    <Screen name="VerifyPhoneNumberCode" component={VerifyPhoneNumberCode} />
  </Navigator>
);

export default OnboardingNavigator;
