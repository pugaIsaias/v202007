import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingNavigator from "./src/navigator/OnboardingNavigator";

export const App: React.FC<{}> = () => {
  return (
    <NavigationContainer>
      <OnboardingNavigator />
    </NavigationContainer>
  );
};

export default App;
