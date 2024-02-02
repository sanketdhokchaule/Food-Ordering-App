import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";

const useRestaurantList = () => {
    const [restList, setRestList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const json = await data.json();
        //optional chaining
        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestList(resData);
    }

    return restList;
}

export default useRestaurantList;