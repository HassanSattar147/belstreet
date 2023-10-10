// import React from "react";
import "../../styles/elements.css";

interface Props {
  placeholder: string;
  defaultValue?: string;
  styles?: React.CSSProperties;
}

const Input = ({ placeholder, defaultValue, styles }: Props) => {
  return (
    <input
      type="text"
      className="input"
      placeholder={placeholder}
      defaultValue={defaultValue}
      style={styles}
    />
  );
};

export default Input;
