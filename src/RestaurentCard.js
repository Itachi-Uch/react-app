import { CDN_URL } from "./utils/constants";

const RestaurentCard = (props) => {
  const { restaurent } = props;
  const { name, cuisines, avgRating } = restaurent.info;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + restaurent.info.cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h5>{avgRating + " " + "stars"}</h5>
    </div>
  );
};

export default RestaurentCard;
