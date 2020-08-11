import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import {
  dependencies,
  DependencyContext,
} from "./src/common/context/DependencyContext";
import OnboardingNavigator from "./src/navigation/navigator/OnboardingNavigator";

const client = new ApolloClient({
  uri: `http://localhost:8001/graphql`,
  cache: new InMemoryCache(),
});

export const App: React.FC<{}> = () => {
  return (
    <DependencyContext.Provider value={dependencies}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <OnboardingNavigator />
        </NavigationContainer>
      </ApolloProvider>
    </DependencyContext.Provider>
  );
};

export default App;
