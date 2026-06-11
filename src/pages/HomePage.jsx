import { Link } from "react-router";
import { useState } from "react";
import Footer from "../components/Footer";
import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";

export default function HomePage() {
  const [results, setResults] = useState(null);
  return (
    <div>
      <h1>List of all games:</h1>
      <div>
        <Link to="/about-us">
          <p>about us page</p>
        </Link>
        <HeroSlider />
        <Searchbar onResult={setResults} />
      </div>
      <GameList results={results} />
      <Footer />
    </div>
  );
}
