import Shimmer from "./shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resInfo = useRestaurantMenu(id);
  if (!resInfo) {
    return <Shimmer />;
  }
  const { name, cuisines, costForTwoMessage } =
    resInfo.data.cards[2].card.card.info;
  const itemName =
    resInfo.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;
  return (
    <div className="restaurant-menu">
      <div>
        <h1>{name}</h1>
      </div>
      <div>
        <p>
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <ul>
        <h1>Menu</h1>
        {itemName.map((menu) => (
          <li key={menu.card.info.id}>
            {menu.card.info.name} - {"Rs-" + menu.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
