import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
  AlignItemsProps,
  BackgroundColorProps,
  border,
  BorderProps,
  color,
  compose,
  display,
  flexbox,
  FontSizeProps,
  FontWeightProps,
  height,
  space,
  SpaceProps,
  TextAlignProps,
  TextColorProps,
  typography,
  width,
} from "styled-system";
import theme from "../../constant/theme";

export const TextLayout = compose(
  color,
  space,
  display,
  width,
  height,
  border,
  flexbox,
  typography
);

type TextProps =
  | TouchableOpacityProps
  | BackgroundColorProps
  | SpaceProps
  | BorderProps
  | AlignItemsProps
  | TextAlignProps
  | TextColorProps
  | FontSizeProps
  | FontWeightProps;

const TextBase = styled.Text<TextProps>`
  ${TextLayout}
`;

TextBase.defaultProps = {
  paddingTop: 21,
  paddingBottom: 21,
};

export const PrimaryText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase
    {...props}
    paddingTop={0}
    paddingBottom={50}
    color={theme.colors.primary.main}
    fontSize={50}
    fontWeight={700}
    textAlign={"center"}
  >
    {children}
  </TextBase>
);

export const SecondaryText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase {...props} color={theme.colors.secondary.main} textAlign={"center"}>
    {children}
  </TextBase>
);

export const TertiaryText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase {...props} color={theme.colors.tertiary.main} textAlign={"center"}>
    {children}
  </TextBase>
);

export const FooterText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase {...props} color={theme.colors.tertiary.main} textAlign={"center"}>
    {children}
  </TextBase>
);
