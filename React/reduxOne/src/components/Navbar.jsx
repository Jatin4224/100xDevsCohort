import React from "react";

const Navbar = ({ values }) => {
  const favouritesCount = values.filter((item) => item.added).length;

  return (
    <div className="w-full px-8 py-4 flex items-center justify-between bg-zinc-800 shadow-md">
      {/* Left Title Section */}
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-white tracking-wide">
          PSYTRANCE 2017
        </h3>
        <span className="text-sm text-teal-400 font-medium tracking-wider">
          VOLUME 01
        </span>
      </div>

      {/* Favourites Badge */}
      <div className="flex items-center gap-2 bg-amber-900 text-white px-4 py-2 rounded-full shadow-inner">
        <span className="text-sm font-medium">Favourites</span>
        <span className="text-sm font-bold bg-white text-amber-900 px-2 py-0.5 rounded-full">
          {favouritesCount}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
