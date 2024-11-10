import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCatogary = ({ item, showItems, setShowIndex }) => {
  const [hideItems, setHideItems] = useState(false);
  const handleclick = () => {
    setShowIndex();
    setHideItems(!hideItems);
  };
  return (
    <div className="bg-gray-100 shadow-lg p-3 w-6/12 mx-auto my-2 ">
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleclick}
      >
        <span className="font-bold text-m">
          {item.title} ({item.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItems && hideItems && <ItemList itemName={item.itemCards} />}
    </div>
  );
};

export default RestaurantCatogary;
