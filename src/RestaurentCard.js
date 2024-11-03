import { CDN_URL } from "./utils/constants";

const RestaurentCard = (props) => {
  const { restaurent } = props;
  const { name, cuisines, avgRating } = restaurent.info;

  return (
    <div className="res-card m-4 p-4 w-[230] bg-black border border-gray-200 rounded-2xl hover:bg-red-800">
      <img
        className="res-logo rounded-2xl"
        src={CDN_URL + restaurent.info.cloudinaryImageId}
      />
      <div className="bg-gray-800 ">
        <h3 className="text-gray-100 font-bold py-2 text-lg">{name}</h3>
        <h5 className="text-gray-100">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-100">{avgRating + " " + "stars"}</h5>
      </div>
    </div>
  );
};

export default RestaurentCard;
