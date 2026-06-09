import { Link } from "react-router";
import Footer from "../components/Footer";
import HeroSlider from "../components/HeroSlider";

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
      <Footer />
    </div>
  );
}
