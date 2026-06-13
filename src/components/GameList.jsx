import React from "react";
import { useContext } from "react";
import { UserData } from "../context/Context";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer, GrAndroid } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { motion } from "motion/react";

function GameList() {
  const { data, filteredData, isFiltering, addItem, hasFavourite } =
    useContext(UserData);
  const gamesToShow = isFiltering ? filteredData : data;

  return (
    <main className="w-[100vw] mx-auto pb-40 bg-[#0b1326]">
      <section>
        {hasFavourite && (
          <aside className="flex items-center w-[90vw] mx-auto gap-5 mb-2">
            <div className="bg-[#00687A] w-2 h-10"></div>
            <h2 className="text-[#ffffff] font-mono font-bold text-xl">
              Based on your favorites
            </h2>
          </aside>
        )}
      </section>

      <section>
        <aside className="flex items-center w-[90vw] mx-auto gap-5">
          <div className="bg-[#00687A] w-2 h-10"></div>
          <h2 className="text-[#ffffff] font-mono font-bold text-xl">
            All games
          </h2>
        </aside>

        <aside className="flex flex-wrap justify-evenly gap-3 w-[90%] mx-auto">
          {gamesToShow.map((element) => {
            const hasXbox = element.platforms.some(
              (p) =>
                p.platform?.name === "Xbox Series S/X" ||
                p.platform?.name === "Xbox 360" ||
                p.platform?.name === "Xbox One",
            );
            const hasPlaystation = element.platforms.some(
              (p) =>
                p.platform?.name === "PlayStation 5" ||
                p.platform?.name === "PlayStation 4",
            );
            const hasPc = element.platforms.some(
              (p) => p.platform?.name === "PC",
            );
            const hasLinux = element.platforms.some(
              (p) => p.platform?.name === "Linux",
            );
            const hasAndroid = element.platforms.some(
              (p) => p.platform?.name === "Android",
            );
            const hasNintendo = element.platforms.some(
              (p) => p.platform?.name === "Nintendo Switch",
            );
            const hasVita = element.platforms.some(
              (p) => p.platform?.name === "PS Vita",
            );
            const hasMac = element.platforms.some(
              (p) => p.platform?.name === "macOS",
            );
            const hasIos = element.platforms.some(
              (p) => p.platform.name === "iOS",
            );

            return (
              <article key={element.id} className="w-60 h-60 mt-20 relative">
                <div
                  className="w-[100%] h-40 bg-cover bg-center mb-5"
                  style={{
                    backgroundImage: `url(${element.background_image})`,
                  }}
                ></div>
                <section>
                  <h2 className="my-2 text-amber-50 text-xl">
                    <Link to={`/game-detail/${element.id}`}>
                      {element.name}
                    </Link>
                  </h2>
                  <div className="flex gap-3">
                    {hasXbox && <FaXbox className="text-amber-50" />}
                    {hasPlaystation && (
                      <FaPlaystation className="text-amber-50" />
                    )}
                    {hasPc && <GrPersonalComputer className="text-amber-50" />}
                    {hasLinux && <FaLinux className="text-amber-50" />}
                    {hasAndroid && <IoLogoAndroid className="text-amber-50" />}
                    {hasNintendo && (
                      <BsNintendoSwitch className="text-amber-50" />
                    )}
                    {hasVita && <SiPlaystationvita className="text-amber-50" />}
                    {hasMac && (
                      <MdOutlineDesktopMac className="text-amber-50" />
                    )}
                    {hasIos && <FaAppStoreIos className="text-amber-50" />}
                  </div>
                </section>
                <motion.button
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 1 }}
                  className="text-amber-50 absolute top-3 right-3 w-7.5 h-7.5"
                  onClick={() => addItem(element)}
                >
                  <FaHeart className=" text-[#00687A] cursor-pointer w-auto h-[100%]" />
                </motion.button>
              </article>
            );
          })}
        </aside>
      </section>
    </main>
  );
}

export default GameList;
