import logo from "../assets/logo.png";
import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <div className="bg-[#0b1326] font-mono text-white">
      <div className="mx-auto max-w-9/10 px-4 relative flex justify-between items-center">
        <div className="flex">
          <div className="p-2">
            <img
              alt="JATracker Logo"
              src={logo}
              className="h-12 w-auto border-white"
            />
          </div>
          <div className="mt-2 ml-2 flex justify-between gap-8 items-center">
            <NavbarLink linkName="Home" />
            <NavbarLink linkName="Games" />
            <NavbarLink linkName="About Us" />
          </div>
        </div>
        <div>
          <input
            name="search"
            placeholder="Search"
            className="block w-full rounded-md bg-white py-1.5 pr-3 pl-10 text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400"
          />
        </div>
        <div>Favorite</div>
        <div>Menu</div>
      </div>
    </div>
  );
}
