import {CDN_URL} from "../utils/constant";

const RestaurantCard = (props) =>{
    const {resData} = props;
    
    const {cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla
    } = resData.info;

    return(
        <div className="m-2 p-4 w-[230px] h-[400px] bg-slate-200 rounded-lg hover:bg-slate-100 hover:scale-95 duration-500">
            <img 
            className="w-full h-1/2 rounded-lg "
            alt="res-logo" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className=" font-bold py-4">{name}</h3>
            <p>{cuisines.join(", ")}</p>
            <h4>⭐ {avgRating} - {sla.deliveryTime} Minutes</h4>
        </div>
    )
}

//Higher order Component
// input - RestaurantCard => RestaurantCardPromoted

export const withPromtedLabel = (RestaurantCard) =>{
    return(props)=>{
        return(
            <div className="relative">
                <label className="absolute  bg-green-600 text-white  p-2 top-0 left-2 rounded-tl-lg rounded-br-lg z-10">Veg</label>
                <RestaurantCard {...props}/>
            </div>
        )
        
    }
}

export default RestaurantCard;

//<p>{costForTwo}</p>