import React from "react";
import { Text, TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
  AlignItemsProps,
  BackgroundColorProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorStyleProps,
  compose,
  display,
  flexbox,
  height,
  space,
  SpaceProps,
  typography,
  width,
} from "styled-system";
import theme from "../../constant/theme";

export const ButtonLayout = compose(
  color,
  space,
  display,
  width,
  height,
  border,
  flexbox,
  typography,
  boxShadow
);

type ButtonProps =
  | TouchableOpacityProps
  | ColorStyleProps
  | BackgroundColorProps
  | SpaceProps
  | BorderProps
  | AlignItemsProps
  | BoxShadowProps;

const ButtonBase = styled.TouchableOpacity<ButtonProps>`
  ${ButtonLayout}
`;

ButtonBase.defaultProps = {
  paddingTop: 21,
  paddingBottom: 21,
};

export const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <ButtonBase
    {...props}
    borderRadius={30}
    alignItems="center"
    marginTop={30}
    bg={theme.button.body.able}
    boxShadow={"5px 5px 5px " + theme.button.shadow}
  >
    <Text>{children}</Text>
  </ButtonBase>
);

export const SecondaryButton: React.FC<ButtonProps> = ({
  children,
  ...props
}) => (
  <ButtonBase {...props} bg="yellow" borderRadius={2} alignItems="center">
    <Text>{children}</Text>
  </ButtonBase>
);
