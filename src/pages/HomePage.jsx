import GameList from "../components/GameList";
import HeroSlider from "../components/HeroSlider";
import Searchbar from "../components/Searchbar";
import FeaturedGame from "../components/FeaturedGame";
import { useContext, useEffect } from "react";
import { UserData } from "../context/Context";

export default function HomePage() {
  const { resetFilter } = useContext(UserData);

  useEffect(() => {
    resetFilter();
  }, []);
  return (
    <div className="bg-[#0b1326]">
      <div>
        <HeroSlider />
        <FeaturedGame />
        <div className="flex justify-center px-4 py-6 pt-20">
          <Searchbar />
        </div>
      </div>
      <GameList />
    </div>
  );
}
