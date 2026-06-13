import logo from "../assets/logo.png";
import NavbarLink from "./NavbarLink";
import { HiHeart, HiOutlineBars3 } from "react-icons/hi2";
import { Link } from "react-router";
import NavbarSearch from "./NavSearchbar";

export default function Navbar() {
  return (
    <div className="bg-[#0b1326] font-mono text-white">
      <div className="mx-auto max-w-9/10 px-4 relative flex justify-between items-center">
        <div className="flex">
          <div className="p-2">
            <Link to="/">
              <img
                alt="JATracker Logo"
                src={logo}
                className="h-12 w-auto border-white"
              />
            </Link>
          </div>
          <div className="mt-2 ml-2 flex justify-between gap-8 items-center">
            <NavbarLink linkHref="/" linkLabel="Home" />
            <NavbarLink linkHref="/favourite-games" linkLabel="Games" />
            <NavbarLink linkHref="/about-us" linkLabel="About Us" />
          </div>
        </div>
        <div className="flex-1 mx-6 xl:mx-32">
          <NavbarSearch />
        </div>
        <div className="mt-2 flex gap-4">
          <NavbarLink
            linkHref="/"
            linkLabel=<HiHeart className="h-6 w-auto" />
            icon={true}
          />
          <NavbarLink
            icon={true}
            linkHref="/"
            linkLabel=<HiOutlineBars3 className="h-6 w-auto" />
          />
        </div>
      </div>
    </div>
  );
}
