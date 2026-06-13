import { useState } from "react";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";
import FeaturedGame from "../components/FeaturedGame"
import CommentSection from "../components/CommentSection.jsx"

export default function HomePage() {
  const [results, setResults] = useState(null);
  return (
    <div>
      <div>
        <HeroSlider />
        <FeaturedGame />
        <CommentSection />
        <Searchbar onResult={setResults} />
      </div>
      <GameList results={results} />
    </div>
  );
}
