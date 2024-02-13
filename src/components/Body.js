import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // State variable - Super powerful variable
  const [restList, setRestList] = useState([]);
  const [filterRest, setFilterRest] = useState([]);
  const [userInput, setUserInput] = useState("");

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try{
        const data = await fetch(RES_URL, {
          mode: "no-cors",
          headers: {
            "access-control-allow-origin" : "*"
          }
        });
    const json = await data.json();
    //optional chaining
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestList(resData);
    setFilterRest(resData);
    }
    catch(error){
        console.log(error.message)
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <div className="h-lvh text-center ">Looks like you are Offline !!! check your internet connection</div>
    );

  const searchRest = (userInput, restList) => {
    let searchRes = restList.filter((res) =>
      res.info.name.toLowerCase().includes(userInput.toLowerCase())
    );
    return searchRes;
  };

  const { setUserName } = useContext(UserContext);

  //conditional rendering
  return restList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="sm:flex justify-center ">
        <div className="sm:m-2 m-auto p-0 flex items-center justify-center">
          <input
            data-testid="searchInput"
            className="sm:w-[300px]  w-[200px] h-[32px] border border-solid border-black rounded-md p-1"
            type="text"
            value={userInput}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
          />
          <button
            className="px-3 py-2 bg-purple-600 text-white sm:m-4 m-2 rounded-lg hover:scale-105 duration-500"
            type="submit"
            onClick={() => {
              const data = searchRest(userInput, restList);
              setFilterRest(data);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center justify-center">
          <button
            className="px-4 py-2 bg-black text-white rounded-lg hover:scale-105 duration-500"
            onClick={() => {
              const filteredList = restList.filter(
                (res) => res.info.avgRating > 4
              );
              setFilterRest(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
        {/** 
                <div className='search m-4 p-4'> Username :
                    <input className=" w-[100px] h-[32px] border border-solid border-black rounded-md p-1" type="text"  onChange={(e)=>{
                        setUserName(e.target.value);
                    }}/>
                </div>*/}
      </div>
      <div className="flex flex-wrap justify-center">
        {filterRest.map((res) => (
          <Link key={res.info.id} to={"restaurants/" + res.info.id}>
            {res.info.veg ? (
              <RestaurantCardPromoted resData={res} />
            ) : (
              <RestaurantCard resData={res} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
