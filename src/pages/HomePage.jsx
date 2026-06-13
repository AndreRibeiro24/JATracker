import { useState } from "react";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";
import FeaturedGame from "../components/FeaturedGame"

export default function HomePage() {
  const [results, setResults] = useState(null);
  return (
    <div className="bg-[#0b1326]">
      <div>
        <HeroSlider />
        <FeaturedGame />
        <div className="flex justify-center px-4 py-6 pt-20">
        <Searchbar onResult={setResults} />
        </div>
      </div>
      <GameList results={results} />
    </div>
  );
}
