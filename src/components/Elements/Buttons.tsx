// import React from "react";
import { CSSProperties } from "react";
import "../../styles/elements.css";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  style?: CSSProperties;
}

const Buttons = ({ text, variant, style }: Props) => {
  return (
    <button className={variant} style={style}>
      {text}
    </button>
  );
};

export default Buttons;
