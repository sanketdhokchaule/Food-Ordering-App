import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const [showItems, setShowItems] = useState(true);

  const onlineStatus = useOnlineStatus();

  const data = useContext(UserContext);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const handleToggle = () => {
    if(!showItems){
        setShowItems(true);
    }else{
        setShowItems(false);
    }
  };

  return (
    <div className="sm:flex justify-between bg-purple-600 shadow-lg m-2">
      <div className="flex items-center justify-between">
        <div className="logo-container">
          <img className="sm:w-32 w-24 border border-black" src={LOGO_URL} />
        </div>
        <div
          className="sm:hidden font-bold text-2xl mr-5 cursor-pointer"
          onClick={handleToggle}
        >
          ☰
        </div>
      </div>
        <div className={`sm:flex ${showItems && "hidden"}`}>
          <ul className="sm:flex sm:items-center sm:text-xl sm:font-bold text-lg font-medium text-white text-center">
            <li className="sm:px-3 hover:scale-y-110 py-1 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              <Link to="/">Home</Link>
            </li>
            <li className="sm:px-3 hover:scale-y-110 py-1 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              <Link to="/about">About</Link>
            </li>
            <li className="sm:px-3 hover:scale-y-110 py-1 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              <Link to="/contact">Contact</Link>
            </li>
            {/** 
                <li className="sm:px-3 hover:scale-110">
                    <Link to="/grocery">Grocery</Link>
                </li>
                */}
            <li className="sm:px-3 hover:scale-y-110 cursor-pointer py-1 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              <Link to="/cart">
                🛒Cart{" "}
                {cartItems.length !== 0
                  ? "(" + cartItems.length + ")" + " items"
                  : ""}
              </Link>
            </li>

            {/*<button 
                    className="sm:px-3 py-2 bg-black rounded-lg hover:scale-105"
                    onClick={()=>{
                        btnName ==="Login" 
                        ? setBtnName("Logout")
                        :setBtnName("Login");
                    }}
                >
                    {btnName}
                </button>*/}

            <li className="sm:px-3 py-1 hover:scale-y-110 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              {onlineStatus ? "Online 🟢" : "Offline 🔴"}
            </li>
            <li className="sm:px-3 sm:my-2 py-1 hover:scale-y-110 duration-300 hover:bg-purple-400 sm:hover:bg-purple-600">
              {data.loggedIn}
            </li>
          </ul>
        </div>
    </div>
  );
};

export default Header;
