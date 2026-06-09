import React from "react";
import { useContext } from "react";
import { UserData } from "../context/Context";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer, GrAndroid } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";

function GameList() {
  const { data } = useContext(UserData);

  return (
    <main className="w-[95vw] mx-auto mb-40">
      <section>
        <aside>
          <div></div>
          <h2>Based on your favorites</h2>
        </aside>
      </section>
      <section>
        <aside>
          <div></div>
          <h2>All games</h2>
        </aside>
        <aside className="flex flex-wrap gap-5">
          {data.map((element) => {
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
              <article key={element.id} className="w-60 h-60">
                <div
                  className="w-[100%] h-40 bg-cover bg-center mb-5"
                  style={{
                    backgroundImage: `url(${element.background_image})`,
                  }}
                ></div>
                <section>
                  <h2 className="my-2">{element.name}</h2>
                  <div className="flex gap-3">
                    {hasXbox && <FaXbox />}
                    {hasPlaystation && <FaPlaystation />}
                    {hasPc && <GrPersonalComputer />}
                    {hasLinux && <FaLinux />}
                    {hasAndroid && <IoLogoAndroid />}
                    {hasNintendo && <BsNintendoSwitch />}
                    {hasVita && <SiPlaystationvita />}
                    {hasMac && <MdOutlineDesktopMac />}
                    {hasIos && <FaAppStoreIos />}
                  </div>
                </section>
              </article>
            );
          })}
        </aside>
      </section>
    </main>
  );
}

export default GameList;
