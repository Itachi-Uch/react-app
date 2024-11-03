import RestaurentCard from "../RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [resList, setresList] = useState([]);
  const [filteredRes, setfilteredres] = useState([]);
  const [searchText, setSearchText] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  let fetchData = async () => {
    let data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0473216&lng=73.0699046&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    let json = await data.json();
    setresList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilteredres(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>You are offline, check your internet connection</h1>;
  }
  return !resList.length ? (
    <Shimmer />
  ) : (
    <div className="body bg-black hover:cursor-text">
      <input
        type="text"
        placeholder="  Search Here"
        className="inputText border border-black m-2 rounded-md"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search  mx-4 px-4 bg-red-500 rounded-xl text-gray-50 hover:bg-red-400"
        onClick={() => {
          let filteredRes = resList.filter((res) =>
            res.info.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setfilteredres(filteredRes);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn mx-2 px-2 bg-red-500 rounded-xl text-gray-50  hover:bg-red-400"
        onClick={() => {
          let filteredRes = resList.filter((res) => res.info.avgRating > 4);
          setresList(filteredRes);
        }}
      >
        Top Rated Restaurents
      </button>
      <div className="res-container flex flex-wrap">
        {filteredRes.map((res) => (
          <Link key={res.info.id} to={"/restaurant/" + res.info.id}>
            <RestaurentCard restaurent={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
