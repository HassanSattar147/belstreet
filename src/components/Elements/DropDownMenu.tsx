import { ReactElement, useState } from "react";
import Input from "./Input";
import downBtn from "../../../public/assets/common/downBtn.png";
import useClickOutside from "./useClickOutside";
import "../../styles/elements.css";

export interface LV {
  label: string | number | ReactElement;
  value: string | number;
}

interface Props {
  options: LV[];
  selectedLV: LV | undefined;
  setSelectedLV: (x: LV) => void;
  conatinerClass?: string;
  containerStyles?: React.CSSProperties;
}

const DropDownMenu = ({
  options,
  selectedLV,
  setSelectedLV,
  conatinerClass,
  containerStyles,
}: Props) => {
  const [isDDActive, setIsDDActive] = useState(false);
  const [searchStr, setSearchStr] = useState("");

  const ddRef = useClickOutside(() => {
    setIsDDActive(false);
  });

  const handlerDropdown = () => {
    setIsDDActive(!isDDActive);
  };

  return (
    <div
      className={"dd-wrapper " + conatinerClass}
      ref={ddRef}
      style={containerStyles}
    >
      <Input
        placeholder="Choose Your Municipality"
        style={{
          paddingRight: "40px",
        }}
        onFocus={() => setIsDDActive(true)}
        onBlur={() => setIsDDActive(false)}
        value={searchStr}
        valueSetter={setSearchStr}
      />
      <div
        onClick={handlerDropdown}
        className="dd-btn-container"
        style={{
          backgroundColor: isDDActive ? "#0003" : "",
        }}
      >
        <img src={downBtn} alt="" />
      </div>

      {isDDActive && (
        <div className={`dropdown-menu`}>
          {options
            .filter((e) =>
              e.label.toString().toLowerCase().includes(searchStr.toLowerCase())
            )
            .map((e) => {
              const isSelected = selectedLV?.value === e.value;
              return (
                <div
                  className="dropdown-menu-item"
                  onClick={() => {
                    setSelectedLV(e);
                  }}
                  style={{
                    backgroundColor: isSelected ? "#0003" : "",
                    color: isSelected ? "#000" : "",
                  }}
                >
                  {e.label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
