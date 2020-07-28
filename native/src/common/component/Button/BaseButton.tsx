import React from "react";
import styled from "styled-components/native";
import ButtonLayout from "../Layout/ButtonLayout";
import { Text } from "react-native";

const RawButton = styled.TouchableOpacity`
  ${ButtonLayout}
`;

export const BaseButton: React.FC<{}> = ({ children, ...props }) => (
  <RawButton {...props}>
    <Text>{children}</Text>
  </RawButton>
);

export default BaseButton;
