import { useContext, useState } from "react";
import { UserData } from "../context/Context";
import GameList from "../components/GameList";

export default function FavouritePage() {
  const { data, isFavourite } = useContext(UserData);

  return (
    <div className="bg-[#0b1326] font-mono text-white min-h-screen px-4 py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold mb-10">
          Your <span className="text-purple-400">Favourite</span> Games
        </h1>
      </div>
      {isFavourite.map((element) => (
        <h1 key={element.id}>{element.name}</h1>
      ))}
    </div>
  );
}
