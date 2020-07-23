import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SendPhoneVerificationCode from "../../feature/onboarding/screen/SendPhoneNumberVerificationCode";

export const OnboardingNavigator: React.FC<{}> = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <Navigator initialRouteName="SendVerificationCode">
      <Screen
        name="SendVerificationCode"
        component={SendPhoneVerificationCode}
        options={{
          title: "Send Verification Code",
        }}
      />
    </Navigator>
  );
};

export default OnboardingNavigator;
