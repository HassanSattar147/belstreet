import "../../styles/nav.css";
import logo from "../../../public/assets/common/logo.svg";

interface Props {
  style?: React.CSSProperties;
}

const Nav: React.FC<Props> = ({ style }) => {
  return (
    <div style={style} className="nav">
      <img src={logo} alt="" />
    </div>
  );
};

export default Nav;
