import { useState } from "react";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";
import FeaturedGame from "../components/FeaturedGame"
import CommentSection from "../components/CommentSection.jsx"

export default function HomePage() {
  return (
    <div className="bg-[#0b1326]">
      <div>
        <HeroSlider />
        <FeaturedGame />
        <div className="flex justify-center px-4 py-6 pt-20">
        <Searchbar/>
        </div>
      </div>
      <GameList/>
    </div>
  );
}
