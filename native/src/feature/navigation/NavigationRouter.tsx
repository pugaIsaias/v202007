import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SendPhoneVerificationCode from "../onboarding/screen/SendPhoneNumberVerificationCode";

export const NavigationRouter: React.FC<{}> = () => {
  const { Navigator, Screen } = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="SendVerificationCode">
        <Screen
          name="SendVerificationCode"
          component={SendPhoneVerificationCode}
          options={{
            title: "Send Verification Code",
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default NavigationRouter;
