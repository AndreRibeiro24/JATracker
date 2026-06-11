import { HiMagnifyingGlass } from "react-icons/hi2";
import { useState, useContext, useEffect, useRef } from "react";
import { UserData } from "../context/Context";
import { Link } from "react-router";

export default function NavbarSearch() {
  const [input, setInput] = useState("");
  const { data, loading } = useContext(UserData);
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const filtered = input
    ? data.filter((game) =>
        game.name.toLowerCase().includes(input.toLowerCase()),
      )
    : [];

  const handleChange = (value) => {
    setInput(value);
    setOpen(true)
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        setInput("")
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [input]);

  return (
    <div ref={menuRef} className="relative grid w-full grid-cols-1">
      <input
        value = {input}
        name="search"
        placeholder="Search"
        onChange={(e) => handleChange(e.target.value)}
        className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
      />
      <HiMagnifyingGlass className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400" />
      {filtered.length > 0 && (
        <ul className="absolute top-full left-0 right-0 z-50 p-2 bg-white rounded-md border-2 border-blue-900"
        >
          {loading && <p className="text-gray-400 text-sm">Loading...</p>}
          {open && filtered.map((game) => (
            <li key={game.id} className="px-2 py-2 text-gray-900 hover:bg-blue-100 rounded-md">
              <Link to="/about-us">
                <div className="flex items-center">
                  <img
                    alt="Game Image"
                    src={game.background_image}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <p className="ml-6">{game.name}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
