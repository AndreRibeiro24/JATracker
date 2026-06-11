import { useState } from "react";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";

export default function HomePage() {
  const [results, setResults] = useState(null);
  return (
    <div>
      <div>
        <HeroSlider />
        <Searchbar onResult={setResults} />
      </div>
      <GameList results={results} />
    </div>
  );
}
