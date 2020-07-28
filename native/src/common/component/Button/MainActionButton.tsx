import React from "react";
import { Text } from "react-native";
import BaseButton from "./BaseButton";

export const MainActionButton: React.FC<{}> = ({ children }) => {
  return (
    <BaseButton color="white" bg="black" mx={20} my={20} height={50}>
      <Text>{children}</Text>
    </BaseButton>
  );
};

export default MainActionButton;
