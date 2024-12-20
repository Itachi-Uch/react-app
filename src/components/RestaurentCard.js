import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { restaurent } = props;
  const { name, cuisines, avgRating } = restaurent.info;

  return (
    <div className="res-card m-2 p-2 w-[230] bg-black border border-gray-200 rounded-2xl hover:bg-red-800 h-96">
      <img
        className="res-logo rounded-2xl h-3/6 w-56 p-1"
        src={CDN_URL + restaurent.info.cloudinaryImageId}
      />
      <div className="bg-gray-800 p-2 h-3/6 my-1">
        <h3 className="text-gray-100 font-bold py-2 text-lg">{name}</h3>
        <h5 className="text-gray-100">{cuisines.join(", ")}</h5>
        <h5 className="text-gray-100">{avgRating + " " + "stars"}</h5>
      </div>
    </div>
  );
};

export const withPromotedlabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="text-white p-1 my-2 absolute bg-black rounded-lg">
          Promoted
        </label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
