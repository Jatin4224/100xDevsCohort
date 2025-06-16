import React from "react";
import { useSelector } from "react-redux";

export const SideBar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return if menu is closed
  if (!isMenuOpen) return null;

  return (
    <div className="p-4 w-42 shadow-[0_4px_10px_rgba(255,0,0,0.5)]  flex flex-col gap-6 text-sm h-80">
      <div>
        <h2 className="text-gray-700 font-extrabold mb-2 text-xs tracking-wider">
          SUBSCRIPTIONS
        </h2>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li className="hover:text-black cursor-pointer">🎵 Music</li>
          <li className="hover:text-black cursor-pointer">📹 Videos</li>
          <li className="hover:text-black cursor-pointer">🔥 Shorts</li>
        </ul>
      </div>

      <div>
        <h2 className="text-gray-700 font-extrabold mb-2 text-xs tracking-wider">
          WATCH LATER
        </h2>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li className="hover:text-black cursor-pointer">📺 TV</li>
          <li className="hover:text-black cursor-pointer">📰 News</li>
          <li className="hover:text-black cursor-pointer">🏀 Sports</li>
        </ul>
      </div>
    </div>
  );
};
