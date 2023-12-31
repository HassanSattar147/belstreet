import { ReactElement, useState } from "react";
import Input from "./Input";
import downBtn from "../../../public/assets/common/downBtn.png";
import useClickOutside from "./useClickOutside";
import { useIntl } from "react-intl";
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

  const intl = useIntl();

  const handleCloseDD = () => {
    setIsDDActive(false);
  };

  const ddRef = useClickOutside(handleCloseDD);

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
        placeholder={
          selectedLV ? (selectedLV.label as string) : intl.formatMessage({ id:"dd.choose-commune", defaultMessage: "Choose Your Municipality" })
        }
        style={{
          paddingRight: "40px",
        }}
        className={ selectedLV ? "black-placeholder" : "" }
        onFocus={() => setIsDDActive(true)}
        onBlur={() => {
          setTimeout(handleCloseDD, 100);
        }}
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
            .filter((option) =>
              option.label
                .toString()
                .toLowerCase()
                .includes(searchStr.toLowerCase())
            )
            .map((option) => {
              const isSelected = selectedLV?.value === option.value;
              return (
                <div
                  key={option.value}
                  className="dropdown-menu-item"
                  onClick={() => {
                    setSelectedLV(option);
                    setTimeout(() => {
                      setSearchStr("");
                    }, 10);
                    setTimeout(() => {
                      handleCloseDD();
                    }, 10);
                  }}
                  style={{
                    backgroundColor: isSelected ? "#0003" : "",
                    color: isSelected ? "#000" : "",
                  }}
                >
                  {option.label}
                </div>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default DropDownMenu;
