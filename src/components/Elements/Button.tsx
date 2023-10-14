// import React from "react";
import { CSSProperties } from "react";
import "../../styles/elements.css";

interface Props {
  text: string;
  variant: "primary" | "secondary";
  style?: CSSProperties;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  className?: string;
  type?: "submit" | "button"
}

const Button = ({ text, variant, style, onClick, className, type }: Props) => {
  return (
    <button
      className={variant + " " + className}
      style={style}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
