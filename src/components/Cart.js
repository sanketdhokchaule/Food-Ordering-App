import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import {useDispatch} from 'react-redux'
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-2">
            <div className="flex items-center justify-center">
                <h1 className="font-bold text-2xl">Cart Items</h1>
                <button onClick={handleClearCart} className="m-2 p-2 bg-black text-white rounded-lg">
                    Clear Cart
                </button>
            </div>
            
            {cartItems.length===0 && <h1 className="my-40 m-auto p-10 font-bold">Cart is Empty ❗</h1>}
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} btn={false} clear={true}/>
            </div>
        </div>
    )
}

export default Cart;