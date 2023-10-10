// import React from "react";
import "../../styles/elements.css";

interface Props {
  placeholder: string;
  defaultValue?: string;
  style?: React.CSSProperties;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  value?: string;
  valueSetter?: (x: string) => void;
}

const Input = ({
  placeholder,
  defaultValue,
  style,
  onFocus,
  onBlur,
  value,
  valueSetter,
}: Props) => {
  const commonProps = {
    type: "text",
    className: "input",
    placeholder,
    defaultValue,
    style,
    onFocus,
    onBlur,
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
