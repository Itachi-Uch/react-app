import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (id) => {
  const [resInfo, useresInfo] = useState(null);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    const data = await fetch(MENU_API + id);
    const json = await data.json();
    useresInfo(json);
  };
  return resInfo;
};

export default useRestaurantMenu;
