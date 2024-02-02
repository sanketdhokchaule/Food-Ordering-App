import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

    const {resId} = useParams();
    
    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resInfo===null) return <Shimmer/>;

    const {
        name,
        cuisines,
        costForTwoMessage,
    } = resInfo?.cards[0]?.card?.card?.info;

    const categories = 
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c)=>c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )

    return (
        <div className="menu justify-center text-center ">
            <h1 className="text-xl font-bold">{name}</h1>
            <h3>{cuisines.join(", ")} - {costForTwoMessage}</h3>
            <h2 className="text-xl font-bold">Menu</h2>
            <div>
                {categories.map((category, index)=>
                    <RestaurantCategory 
                        key={category?.card?.card.title}
                        data={category?.card?.card}
                        showItems={index === showIndex && true}
                        setShowIndex = {()=>setShowIndex(index)}
                    />
                )}
            </div>
        </div>
    )
}

export default RestaurantMenu;
