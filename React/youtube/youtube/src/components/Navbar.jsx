import { RiSearchLine } from "react-icons/ri";
import { CiMenuBurger } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const response = await data.json();
    setSuggestions(response[1]);
  };

  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="h-20 px-6 flex items-center justify-between shadow-[0_4px_10px_rgba(255,0,0,0.5)] bg-[#1F1E24] ">
      <div className="flex items-center gap-4">
        <CiMenuBurger
          className="h-6 w-6 text-zinc-500"
          onClick={toggleMenuHandler}
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNBI61LMEEI4izWwfjyZlJHTNgIlktgvuw_g&s"
          alt="logo"
          className="h-10 w-10 rounded  object-cover"
        />
      </div>

      <div className="flex items-center w-1/2 relative">
        <input
          type="text"
          placeholder="Search anything"
          className="w-full h-10 pl-6 pr-10 rounded-full text-sm text-zinc-700 outline-none shadow-inner bg-gray-100"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <RiSearchLine className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zinc-500" />
      </div>
      <div className=" shadow-[0_4px_10px_rgba(255,0,0,0.5)] bg-[#ffffff] -translate-x-233 mt-70 w-60 rounded-b-lg ">
        <ul className="flex flex-col pl-2">
          {suggestions.map((suggestion) => (
            <li className="border-b border-zinc-100">{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
