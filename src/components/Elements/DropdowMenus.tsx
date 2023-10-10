import { useState } from "react";
import Input from "./Input";
import downBtn from "../../../public/assets/common/downBtn.png";
import DropdowCustomHook from "../Elements/DropdowCustomHook";

interface Props {
  listArr: { text: string }[];
}

const DropdowMenus = ({ listArr }: Props) => {
  const [isActiveDropdown, setIsActiveDropdown] = useState(false);

  const dropdownVisibility = DropdowCustomHook(() => {
    setIsActiveDropdown(false);
  });

  const handlerDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown);
  };

  return (
    <div className="input-option" ref={dropdownVisibility}>
      <Input
        placeholder="Choose Your Municipality"
        styles={{
          paddingRight: "45px",
        }}
      />
      <img
        onClick={handlerDropdown}
        src={downBtn}
        alt=""
        style={{
          position: "absolute",
          right: "-5px",
          top: "50%",
          padding: "10px",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
        }}
      />
      <div className={`dropdown-menu ${isActiveDropdown ? "active" : ""}`}>
        {listArr.map((e) => {
          return <div className="list">{e.text}</div>;
        })}
      </div>
    </div>
  );
};

export default DropdowMenus;
