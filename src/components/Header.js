import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(userContext);
  //we are here Subscribing to the store using selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="header flex justify-between bg-red-400 shadow-xl">
      <div className="logo-container w-36">
        <Link to={"/"}>
          <img className="logo" src={LOGO_URL}></img>
        </Link>
      </div>
      <div className="nav-bar flex items-center">
        <ul className="flex">
          {
            <li className="px-4 text-gray-50 hover:text-black">
              Status: {onlineStatus ? "Online ✅" : "Offline ❌"}
            </li>
          }
          <li className="px-4 text-gray-50 hover:text-black">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 text-gray-50 hover:text-black">
            <Link to={"/about"}>About us</Link>
          </li>
          <li className="px-4 text-gray-50 hover:text-black">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 text-gray-50 hover:text-black">
            <Link to={"/contact"}>Contact Us</Link>
          </li>
          <li className="px-4 text-gray-50 hover:text-black">
            <Link to={"/cart"}>Cart -{cartItems.length} items</Link>
          </li>
        </ul>
        <div className="px-4 text-gray-50 hover:text-black">
          <button
            className="login"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </div>
        <ul>
          <li className="px-4 text-gray-50 hover:text-black">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
