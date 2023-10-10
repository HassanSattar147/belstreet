// import React from "react";
import { CSSProperties } from "react";
import "../../styles/elements.css";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  style?: CSSProperties;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({ text, variant, style, onClick }: Props) => {
  return (
    <button className={variant} style={style} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
