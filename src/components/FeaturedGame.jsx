import { UserData } from "../context/Context";
import { useContext, useState } from "react";
import NavbarLink from "./NavbarLink";
import { Link } from "react-router-dom";

export default function FeaturedGame() {
  const { data } = useContext(UserData);

  const [randomIndex] = useState(() => Math.floor(Math.random() * data.length));
  const randomGame = data[randomIndex];

  return (
    <div className="w-[100vw] mx-auto bg-[#0b1326]">
      <div className="py-32 mx-auto max-w-9/10 xl:max-w-6/10 relative text-white">
        <div>
          <h1 className="mb-2 text-4xl font-medium">Featured Game</h1>
          <h4 className="mb-8 text-lg font-light">
            This weeks game highlight, selected by us:
          </h4>
        </div>
        <div className="grid grid-col-1 sm:grid-cols-2 gap-16 lg:gap-32">
          <Link to={`/game-detail/${randomGame.id}`}>
            <img
              alt="Game Image"
              src={randomGame.background_image}
              className="h-80 w-auto rounded-md object-cover shadow-xl shadow-[#00687A] hover:shadow-2xl"
            />
          </Link>
          <div>
            <h1 className="mb-2 text-4xl font-medium">{randomGame.name}</h1>
            <p className="text-sm">{randomGame.description}</p>
            <div className="mt-4 max-w-100">
              <NavbarLink
                linkHref={`/game-detail/${randomGame.id}`}
                linkLabel="Read More"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
