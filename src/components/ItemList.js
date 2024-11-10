import { CDN_URL } from "../utils/constants";

const ItemList = ({ itemName }) => {
  console.log(itemName);

  return (
    <div>
      {itemName.map((itm) => (
        <div className="flex justify-between border-b-2 border-gray-300">
          <div className=" text-left p-4 w-9/12 ">
            <div>
              <span className="">{itm.card.info.name}</span>
              <span>
                {itm.card.info.price
                  ? -"₹" + itm.card.info.price / 100
                  : "₹" + itm.card.info.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{itm.card.info.description}</p>
          </div>
          <div className="w-3/12 py-4">
            <div className="absolute">
              <button className=" bg-white text-black font-bold rounded-sm">
                {" "}
                Add +
              </button>
            </div>
            <img src={CDN_URL + itm.card.info.imageId} className="py-4"></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
