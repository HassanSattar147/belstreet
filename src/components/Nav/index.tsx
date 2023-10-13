import "../../styles/nav.css";
import logo from "../../../public/assets/common/logo.svg";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

interface Props {
  style?: React.CSSProperties;
}

const Nav: React.FC<Props> = ({ style }) => {

  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const locale = Cookies.get("locale");
    if (locale) {
      setLocale(locale);
    }
  }, []);

  return (
    <div style={style} className="nav">
      <img src={logo} alt="" />
      <span 
        style={{ float: "right", color: "white", fontSize: 13, fontWeight: "500", display: "inline-block", margin: 16, }}
      >
        <span 
          style={{ marginRight: 12, cursor: "pointer", color: locale === "en" ? "#db8c0d" : "" }}
          onClick={() => {
            Cookies.set("locale", "en");
            window.location.reload();
          }}
        >
          En
        </span>
        |
        <span 
          style={{ marginLeft: 12, cursor: "pointer", color: locale === "fr" ? "#db8c0d" : ""  }}
          onClick={() => {
            Cookies.set("locale", "fr");
            window.location.reload();
          }}
        >
          Fr
        </span>
      </span>
    </div>
  );
};

export default Nav;
