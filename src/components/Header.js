import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from 'react-redux';

const Header = () => {
    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    const data = useContext(UserContext);

    //Subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex justify-between bg-purple-600 shadow-lg m-2">
            <div className="logo-container">
                <img className="w-32" src={LOGO_URL}/>
            </div>
            <div className="flex">
                <ul className="flex items-center text-xl font-bold text-white">
                    <li className="px-3 hover:scale-105">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="px-3 hover:scale-105">
                        <Link to="/about">About</Link>
                    </li >
                    <li className="px-3 hover:scale-105">
                        <Link to="/contact">Contact</Link>
                    </li>
                    {/** 
                    <li className="px-4 hover:scale-110">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    */}
                    <li className="px-3 hover:scale-105 cursor-pointer">
                        <Link to="/cart">
                            🛒Cart {cartItems.length !== 0 ? ("("+ cartItems.length+")" + " items") : ("")}
                        </Link>
                    </li>
                    
                    {/*<button 
                        className="px-4 py-2 bg-black rounded-lg hover:scale-105"
                        onClick={()=>{
                            btnName ==="Login" 
                            ? setBtnName("Logout")
                            :setBtnName("Login");
                        }}
                    >
                        {btnName}
                    </button>*/}
                    
                    <li className="px-3">
                        {onlineStatus ? "🟢":"🔴"}
                    </li>
                    <li className="px-3">
                        {data.loggedIn}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header;