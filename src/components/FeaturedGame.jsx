import { UserData } from "../context/Context";
import { useContext, useState } from "react";
import NavbarLink from "./NavbarLink";

export default function FeaturedGame() {
  const { data } = useContext(UserData);
  const [randomIndex] = useState(() => Math.floor(Math.random() * data.length));
  const randomGame = data[randomIndex];

  return (
    <div className="w-[100vw] mx-auto bg-[#0b1326]">
      <div className="py-12 mx-auto max-w-6/10 relative text-white">
        <div>
          <h1 className="mb-2 text-4xl font-medium">Featured Game</h1>
          <h4 className="mb-8 text-lg font-light">
            This weeks game highlight, selected by us:
          </h4>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <img
              alt="Game Image"
              src={randomGame.background_image}
              className="h-80 w-auto rounded-md object-cover shadow-xl shadow-[#00687A]"
            />
          </div>
          <div>
            <h1 className="mb-2 text-4xl font-medium">{randomGame.name}</h1>
            <p className="text-sm">{randomGame.description}</p>
            <div className="mt-4 max-w-100">
            <NavbarLink linkHref="/" linkLabel="Read More" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
