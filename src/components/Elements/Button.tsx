// import React from "react";
import { CSSProperties } from "react";
import "../../styles/elements.css";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  style?: CSSProperties;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
}

const Button = ({ text, variant, style, onClick, className }: Props) => {
  return (
    <button
      className={variant + " " + className}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
