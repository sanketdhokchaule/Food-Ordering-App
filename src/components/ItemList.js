import {MENU_ITEM_URL} from "../utils/constant";
import AddItem from "./AddItem";
import DeleteItem from "./DeleteItem";

const ItemList = ({items, btn, clear}) => {
    
    return(
        <div>
           {items.map((item, index) => (
                <div 
                    key={item.card.info.id}
                    className=" flex p-2 m-2  border-gray-300 border-b-2 text-left"    
                >
                    <div className="w-9/12 mr-3">
                        <div className="py-2 font-medium">
                            <span>{item.card.info.name}</span>
                            <span> ₹{item.card.info.price 
                            ? item.card.info.price/100 
                            : item.card.info.defaultPrice}</span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="relative flex justify-center  w-3/12">
                        <img className="w-full"  src={MENU_ITEM_URL + item.card.info.imageId}/>
                        {btn && <AddItem item={item}/>}
                    </div>
                    {clear && <DeleteItem index={index}/>}
                </div>
           ))}
        </div>
    )


}

export default ItemList;