import React from "react";
import BaseButton from "./BaseButton";

export const MainActionButton: React.FC<{}> = ({ children, ...props }) => (
  <BaseButton
    {...props}
    children={children}
    bg="#888"
    mx={20}
    my={20}
    height={50}
    borderColor="black"
    borderRadius={15}
    alignItems="center"
    justifyContent="center"
  />
);

export default MainActionButton;
