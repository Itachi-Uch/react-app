import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-bar">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About us</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li>
            <Link>Cart</Link>
          </li>
        </ul>
        <button
          className="login"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
