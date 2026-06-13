import { useContext, useState } from "react";
import { UserData } from "../context/Context";
import GameList from "../components/GameList";

export default function FavouritePage() {
  const { data} = useContext(UserData);
  const allGames = [...data];
 


  return (
    <div className="bg-[#0b1326] font-mono text-white min-h-screen px-4 py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold mb-10">
          Your <span className="text-purple-400">Favourite</span> Games
        </h1>
        <div className="flex items-center gap-5 mb-6">
          <div className="bg-[#00687A] w-2 h-10" />
          <h2 className="text-white font-bold text-xl">Recently Added</h2>
        </div>
        <GameList hideHeadings/>
      </div>
    </div>
  );
}
