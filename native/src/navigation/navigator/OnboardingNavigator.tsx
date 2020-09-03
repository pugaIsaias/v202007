import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import {
  SendPhoneNumberVerificationCode,
  VerifyPhoneNumberCode,
} from "../../feature/onboarding/screen";
import { OnboardingStackScreenName } from "../model/OnboardingStackScreenName";
import { OnboardingStackParamList } from "../types/OnboardingStackParamList";

const { Navigator, Screen } = createStackNavigator<OnboardingStackParamList>();

const OnboardingNavigator = () => (
  <Navigator>
    <Screen
      name={OnboardingStackScreenName.SendPhoneNumberVerificationCode}
      component={SendPhoneNumberVerificationCode}
    />
    <Screen
      name={OnboardingStackScreenName.VerifyPhoneNumberCode}
      component={VerifyPhoneNumberCode}
    />
  </Navigator>
);

export default OnboardingNavigator;
