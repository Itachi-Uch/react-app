import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatogary from "./RestaurantCatogary";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  const [showIndex, setShowIndex] = useState(null);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;
  const itemCatogary =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(itemCatogary);

  return (
    <div className="restaurant-menu text-center">
      <h1 className="py-2 font-bold text-lg">{name}</h1>
      <p className=" py-2 font-bold text-sm">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {itemCatogary.map((catogary, index) => (
        <RestaurantCatogary
          key={catogary.card.card.title}
          item={catogary.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
