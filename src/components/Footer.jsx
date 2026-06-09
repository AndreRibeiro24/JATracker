import React from "react";
import Object from "./Object";
import { FaFacebookF } from "react-icons/fa";
import {
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaPinterestP,
  FaDiscord,
  FaTwitch,
  FaLinkedin,
  FaGithub,
  FaRegCopyright,
} from "react-icons/fa6";

function Footer() {
  return (
    <main className="border bg-[#0b1326] h-110 font-mono">
      <section className="flex items-center justify-center gap-2 my-[2%] border-2 border-[#00687A] w-80 ml-12.5 p-1 rounded-4xl">
        <div className="bg-[#00687A] aspect-square h-3 w-3 rounded-full"></div>
        <h2 className="text-[#00687A] font-extrabold text-md">
          FOOTER STATUS: ONLINE
        </h2>
      </section>
      <section className="flex justify-center items-start ">
        <aside className="w-[30%] h-[100%]">
          <h2 className="text-[#8b5cf6] opacity-65 text-shadow-[5px_5px_5px_rbga(125,80,50,1)] text-2xl mb-3.5">
            Navigation
          </h2>
          <ul className="text-[#ffffff] opacity-90">
            <li className="mb-1.5 cursor-pointer">Home</li>
            <li className="mb-1.5 cursor-pointer">Library</li>
            <li className="mb-1.5 cursor-pointer">Favorite Games</li>
            <li className="mb-1.5 cursor-pointer">Contact Us</li>
          </ul>
        </aside>
        <aside className="w-[30%]">
          <h2 className="text-[#8b5cf6] opacity-75 mb-3.5 text-2xl">
            Meet the Team
          </h2>
          <ul className="text-[#ffffff] opacity-90">
            <li className="mb-1.5 cursor-pointer">Theodor - Full Stack Dev</li>
            <li className="mb-1.5 cursor-pointer">Julian - Full Stack Dev</li>
            <li className="mb-1.5 cursor-pointer">Andre - Full Stack Dev</li>
          </ul>
        </aside>
        <aside className="w-[30%] flex justify-center items-center">
          <Object className="w-50 opacity-100" />
        </aside>
      </section>
      <section className="flex justify-center gap-5 mb-2">
        <FaFacebookF className="text-[#ffffff] w-5 h-5" />
        <FaInstagram className="text-[#ffffff] w-5 h-5" />
        <FaXTwitter className="text-[#ffffff] w-5 h-5" />
        <FaYoutube className="text-[#ffffff] w-5 h-5" />
        <FaPinterestP className="text-[#ffffff] w-5 h-5" />
        <FaDiscord className="text-[#ffffff] w-5 h-5" />
        <FaTwitch className="text-[#ffffff] w-5 h-5" />
        <FaLinkedin className="text-[#ffffff] w-5 h-5" />
        <FaGithub className="text-[#ffffff] w-5 h-5" />
      </section>
      <div
        className="h-1 bg-[#00687A] w-[85vw] m-auto"
        style={{
          background:
            "linear-gradient(to right, transparent, #00687A, transparent)",
        }}
      ></div>
      <section className="flex justify-center gap-[35%] items-center mt-5">
        <aside className="flex gap-2">
          <FaRegCopyright className="text-[#ffffff] w-3 h-3" />
          <small className="text-[#ffffff] text-[0.6rem]">
            2026 JATracker Gaming Platform. All rights reserved
          </small>
        </aside>
        <aside>
          <small className="text-[#ffffff] text-[0.6rem]">Privacy Policy</small>
          <small className="text-[#ffffff] text-[0.6rem]">
            Terms of service
          </small>
        </aside>
      </section>
    </main>
  );
}

export default Footer;
