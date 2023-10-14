// import React from "react";
import "../../styles/elements.css";

export interface InputProps {
  placeholder: string;
  defaultValue?: string;
  style?: React.CSSProperties;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  valueSetter?: (x: string) => void;
  name?: string
  type?: string
  required?: boolean;
}

const Input = ({
  placeholder,
  defaultValue,
  style,
  onFocus,
  onBlur,
  value,
  valueSetter,
  name,
  type,
  required,
}: InputProps) => {
  const commonProps = {
    className: "input",
    placeholder,
    defaultValue,
    style,
    onFocus,
    onBlur,
    name,
    required,
    type: type || "text"
  };

  return typeof value === "string" && typeof valueSetter !== "undefined" ? (
    <input
      {...commonProps}
      value={value}
      onChange={(e) => valueSetter(e.target.value)}
    />
  ) : (
    <input {...commonProps} />
  );
};

export default Input;
