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
  TextAlignProps,
  typography,
  width,
} from "styled-system";
import theme from "../../constant/theme";

export const InputLayout = compose(
  color,
  space,
  display,
  width,
  height,
  border,
  flexbox,
  typography
);

type InputTextProps =
  | TouchableOpacityProps
  | ColorStyleProps
  | BackgroundColorProps
  | SpaceProps
  | BorderProps
  | TextAlignProps
  | AlignItemsProps;

const InputBase = styled.TextInput<InputTextProps>`
  ${InputLayout}
`;

InputBase.defaultProps = {
  paddingTop: 21,
  paddingBottom: 21,
};

export const PrimaryInput: React.FC<InputTextProps> = ({
  children,
  ...props
}) => (
  <InputBase
    {...props}
    autoFocus
    paddingTop={2}
    paddingBottom={2}
    borderColor={theme.colors.black.main}
    borderWidth={1}
    borderRadius={5}
    textAlign={"center"}
  ></InputBase>
);
