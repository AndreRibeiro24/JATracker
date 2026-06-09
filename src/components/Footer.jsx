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
import { motion } from "motion/react";

function Footer() {
  return (
    <main className="border bg-[#0b1326] h-[45vh] font-mono">
      <section className="flex items-center justify-center gap-2 my-[2%] border-2 border-[#00687A] w-80 ml-12.5 p-1 rounded-4xl">
        <div className="bg-[#00687A] aspect-square h-3 w-3 rounded-full"></div>
        <h2 className="text-[#00687A] font-extrabold text-md">
          FOOTER STATUS: ONLINE
        </h2>
      </section>
      <section className="flex justify-evenly items-start ">
        <aside className="w-[20%]">
          <h2 className="text-[#8b5cf6] opacity-65 text-shadow-[5px_5px_5px_rbga(125,80,50,1)] text-2xl mb-3.5">
            Navigation
          </h2>
          <ul className="text-[#ffffff] opacity-90 relative text-center">
            <motion.li
              className="mb-2.5 cursor-pointer w-"
              initial={{
                color: "#ffffff",
                textShadow: "none",
              }}
              whileHover={{
                color: ["#FF8792", "#ffffff", "#FF8792"],
                textShadow: [
                  "2px 2px 8px rgb(255, 0, 0)",
                  "2px 2px 8px rgb(255, 255, 255)",
                  "2px 2px 8px rgb(255, 0, 0)",
                ],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              <div className="absolute top-0 left-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#00687A]"></div>
              Home
            </motion.li>
            <motion.li
              className="mb-2.5 cursor-pointer text-center relative"
              initial={{
                color: "#ffffff",
                textShadow: "none",
              }}
              whileHover={{
                color: ["#FF8792", "#ffffff", "#FF8792"],
                textShadow: [
                  "2px 2px 8px rgb(255, 0, 0)",
                  "2px 2px 8px rgb(255, 255, 255)",
                  "2px 2px 8px rgb(255, 0, 0)",
                ],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              <div className="absolute top-0 left-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#00687A]"></div>
              Library
            </motion.li>
            <motion.li
              className="mb-2.5 cursor-pointer relative text-center"
              initial={{
                color: "#ffffff",
                textShadow: "none",
              }}
              whileHover={{
                color: ["#FF8792", "#ffffff", "#FF8792"],
                textShadow: [
                  "2px 2px 8px rgb(255, 0, 0)",
                  "2px 2px 8px rgb(255, 255, 255)",
                  "2px 2px 8px rgb(255, 0, 0)",
                ],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              <div className="absolute top-0 left-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#00687A]"></div>
              Favorite Games
            </motion.li>
            <motion.li
              className="mb-2.5 cursor-pointer relative text-center"
              initial={{
                color: "#ffffff",
                textShadow: "none",
              }}
              whileHover={{
                color: ["#FF8792", "#ffffff", "#FF8792"],
                textShadow: [
                  "2px 2px 8px rgb(255, 0, 0)",
                  "2px 2px 8px rgb(255, 255, 255)",
                  "2px 2px 8px rgb(255, 0, 0)",
                ],
                transition: {
                  duration: 1,
                  repeat: Infinity,
                },
              }}
            >
              <div className="absolute top-0 left-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute top-0 left-0 w-0.5 h-3 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-3 h-0.5 bg-[#00687A]"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-3 bg-[#00687A]"></div>
              Contact Us
            </motion.li>
          </ul>
        </aside>
        <aside className="w-[20%]">
          <h2 className="text-[#8b5cf6] opacity-75 mb-3.5 text-2xl">
            Meet the Team
          </h2>
          <ul className="text-[#ffffff] opacity-90">
            <li className="mb-2.5 cursor-pointer">Theodor - Full Stack Dev</li>
            <li className="mb-2.5 cursor-pointer">Julian - Full Stack Dev</li>
            <li className="mb-2.5 cursor-pointer">Andre - Full Stack Dev</li>
          </ul>
        </aside>
        <aside className="w-[30%] flex justify-center items-center">
          <Object className="w-50 opacity-100" />
        </aside>
      </section>
      <section className="flex justify-center gap-5 mb-5">
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
      <section>
        <aside>
          <FaRegCopyright className="text-[#ffffff] w-3 h-3" />
          <small className="text-[#ffffff] text-">
            2026 JATracker Gaming Platform. All rights reserved
          </small>
        </aside>
        <aside>
          <small className="text-[#ffffff]">Privacy Policy</small>
          <small className="text-[#ffffff] text-[0.5rem]">
            Terms of service
          </small>
        </aside>
      </section>
    </main>
  );
}

export default Footer;
