import { Link } from "react-router";
import Footer from "../components/Footer";
<<<<<<< HEAD
import GameList from "../components/GameList";
=======
import HeroSlider from "../components/HeroSlider";
>>>>>>> 38c030dcfdb5be6e7230c18dacd47a5981fa9ead

export default function HomePage() {
  return (
    <div>
      <h1>List of all games:</h1>
      <div>
        <Link to="/about-us">
          <p>about us page</p>
        </Link>
        <HeroSlider/>
      </div>
      <GameList />
      <Footer />
    </div>
  );
}
