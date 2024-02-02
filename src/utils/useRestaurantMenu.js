import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constant";


const useRestaurantMenu = (resId) =>{

    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        const data1 = await fetch(MENU_URL + resId);
        const json = await data1.json();
        setResInfo(json.data);
    }

    return resInfo;
}

export default useRestaurantMenu;