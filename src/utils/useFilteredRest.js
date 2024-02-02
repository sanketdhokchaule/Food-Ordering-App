import { useState, useEffect } from "react";
import { RES_URL } from "../utils/constant";

const useFilteredRest = () => {
    const [filterRest, setFilterRest] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_URL);
        const json = await data.json();
        //optional chaining
        const resData = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setFilterRest(resData);
    }

    return filterRest;
}

export default useFilteredRest;