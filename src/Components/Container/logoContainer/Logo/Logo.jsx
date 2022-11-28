import "./Logo.css";
import appLogo from "../../../../assets/Logo.png";

const Logo = () => {
  return (
    <>
      <div className="logo">
        <p>Alert Pet</p>
        <img src={appLogo} className="imglogo" />
      </div>
    </>
  );
};

export default Logo;
