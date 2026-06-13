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

function GameList({ results }) {
  const { data, filteredData, isFiltering } = useContext(UserData);
  // const gamesToShow = results ?? data ?? [];
  const gamesToShow = isFiltering ? filteredData : data;

  return (
    <main className="w-[100vw] mx-auto pb-40 bg-[#0b1326]">
      <section>
        <aside className="flex items-center w-[90vw] mx-auto gap-5 mb-2">
          <div className="bg-[#00687A] w-2 h-10"></div>
          <h2 className="text-[#ffffff] font-mono font-bold text-xl">
            Based on your favorites
          </h2>
        </aside>
      </section>
      <section>
        <aside className="flex items-center w-[90vw] mx-auto gap-5">
          <div className="bg-[#00687A] w-2 h-10"></div>
          <h2 className="text-[#ffffff] font-mono font-bold text-xl">
            All games
          </h2>
        </aside>
        <aside className="flex flex-wrap justify-evenly gap-3 w-[90%] mx-auto">
          {/*{gamesToShow.length === 0 && (
            <p>No games match your search.</p>
          )}*/}
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
              <Link to={`/game-detail/${element.id}`}>
                <article
                  key={element.id}
                  className="w-60 h-60 cursor-pointer mt-20"
                >
                  <div
                    className="w-[100%] h-40 bg-cover bg-center mb-5"
                    style={{
                      backgroundImage: `url(${element.background_image})`,
                    }}
                  ></div>
                  <section>
                    <h2 className="my-2 text-amber-50 text-xl">
                      {element.name}
                    </h2>
                    <div className="flex gap-3">
                      {hasXbox && <FaXbox className="text-amber-50" />}
                      {hasPlaystation && (
                        <FaPlaystation className="text-amber-50" />
                      )}
                      {hasPc && (
                        <GrPersonalComputer className="text-amber-50" />
                      )}
                      {hasLinux && <FaLinux className="text-amber-50" />}
                      {hasAndroid && (
                        <IoLogoAndroid className="text-amber-50" />
                      )}
                      {hasNintendo && (
                        <BsNintendoSwitch className="text-amber-50" />
                      )}
                      {hasVita && (
                        <SiPlaystationvita className="text-amber-50" />
                      )}
                      {hasMac && (
                        <MdOutlineDesktopMac className="text-amber-50" />
                      )}
                      {hasIos && <FaAppStoreIos className="text-amber-50" />}
                    </div>
                  </section>
                </article>
              </Link>
            );
          })}
        </aside>
      </section>
    </main>
  );
}

export default GameList;
