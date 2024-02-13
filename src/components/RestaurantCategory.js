import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShowIndex();
    setShow(!show);
  };

  return (
    <div className="sm:w-1/2 sm:m-auto sm:my-4 w-11/12 m-auto my-4 bg-gray-100 shadow-lg p-4">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg ml-0">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems && show ? "▲" : "▼"}</span>
      </div>
      {showItems && show && (
        <ItemList items={data.itemCards} btn={true} clear={false} />
      )}
    </div>
  );
};

export default RestaurantCategory;
