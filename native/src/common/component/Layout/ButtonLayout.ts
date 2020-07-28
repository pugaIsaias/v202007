import {
  compose,
  color,
  space,
  display,
  width,
  height,
  border,
  flexbox,
  typography
} from "styled-system";

export const ButtonLayout = compose(
  color,
  space,
  display,
  width,
  height,
  border,
  flexbox,
  typography
);

export default ButtonLayout;
