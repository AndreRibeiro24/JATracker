import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState, useEffect } from "react";
// import {userData} from "../context/Context"

const games = [
  { name: "Game 1" },
  { name: "Game 2" },
  { name: "Game 3" },
  { name: "Game 4" },
  { name: "Game 5" },
];

export default function NavbarSearch() {
  const [searchbarActive, setSearchbarActive] = useState(false);

  return (
    <div className="grid w-full grid-cols-1">
      <input
        name="search"
        placeholder="Search"
        list="search-result"
        onClick={() => setSearchbarActive(true)}
        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
      />
      <HiMagnifyingGlass className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400" />
      {searchbarActive && (
        <ul className="bg-white rounded-md">
          {games.map((game) => (
            <li className="text-gray-900">{game.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
