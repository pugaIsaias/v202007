import React from "react";
import styled from "styled-components/native";
import { Text, TouchableOpacityProps } from "react-native";
import ButtonLayout from "../Layout/ButtonLayout";

const BaseButton = styled.TouchableOpacity`
  ${ButtonLayout}
`;

export default BaseButton;
