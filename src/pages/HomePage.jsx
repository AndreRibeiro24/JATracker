import { useState } from "react";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";
import FeaturedGame from "../components/FeaturedGame"

export default function HomePage() {
  const [results, setResults] = useState(null);
  return (
    <div>
      <div>
        <HeroSlider />
        <FeaturedGame />
        <Searchbar onResult={setResults} />
      </div>
      <GameList results={results} />
    </div>
  );
}
