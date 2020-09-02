import React from "react";
import { TouchableOpacityProps } from "react-native";
import styled from "styled-components/native";
import {
  AlignItemsProps,
  BackgroundColorProps,
  border,
  BorderProps,
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
  | ColorStyleProps
  | BackgroundColorProps
  | SpaceProps
  | BorderProps
  | AlignItemsProps;

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
    color={"#28244C"}
    fontSize={50}
    fontWeight={700}
    textAlign={"center"}
  >
    {children}
  </TextBase>
);

export const SecundaryText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase {...props} color={"#585884"} textAlign={"center"}>
    {children}
  </TextBase>
);

export const FooterText: React.FC<TextProps> = ({ children, ...props }) => (
  <TextBase {...props} textAlign={"center"}>
    {children}
  </TextBase>
);
