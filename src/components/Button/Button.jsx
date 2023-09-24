import React from "react";
import { Button as MUIButton } from "@mui/material";

const Button = (props) => {
  const {
    text,
    color,
    onClick,
  } = props;

  return (
    <MUIButton
      variant="outlined"
      color={color}
      onClick={onClick}
    >
      {text}
    </MUIButton>
  )
}

export default Button;
