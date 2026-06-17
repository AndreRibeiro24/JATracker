import React, { useContext } from "react";
import { UserData } from "../context/Context";
import { Link } from "react-router-dom";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";

const sections = [
  { label: "Currently Playing", status: "playing" },
  { label: "Already Played", status: "played" },
  { label: "Want to Play", status: "want" },
];

function TrackerPage() {
  const { trackerList, removeFromTracker } = useContext(UserData);

  return (
    <main className="w-[100vw] mx-auto pb-40 bg-[#0b1326]">
      <section>
        <aside className="flex items-center w-[90vw] mx-auto gap-5 mt-10 mb-2">
          <div className="bg-[#00687A] w-2 h-10"></div>
          <h2 className="text-[#ffffff] font-mono font-bold text-xl">
            Your Games Tracked
          </h2>
        </aside>
      </section>

      {sections.map(({ label, status }) => {
        const games = trackerList.filter((g) => g.status === status);

        return (
          <section key={status}>
            <aside className="flex items-center w-[90vw] mx-auto gap-5 mt-12">
              <div className="bg-purple-500 w-2 h-10"></div>
              <h2 className="text-[#ffffff] font-mono font-bold text-xl">
                {label}
              </h2>
              <span className="text-purple-400 font-mono text-sm">
                ({games.length})
              </span>
            </aside>

            {games.length === 0 ? (
              <p className="text-amber-50/30 font-mono text-sm w-[90vw] mx-auto mt-4">
                No games here yet
              </p>
            ) : (
              <aside className="flex flex-wrap justify-start gap-4 w-[90%] mx-auto mt-4">
                {games.map((game) => {
                  const hasXbox = game.platforms.some(
                    (p) =>
                      p.platform?.name === "Xbox Series S/X" ||
                      p.platform?.name === "Xbox 360" ||
                      p.platform?.name === "Xbox One",
                  );
                  const hasPlaystation = game.platforms.some(
                    (p) =>
                      p.platform?.name === "PlayStation 5" ||
                      p.platform?.name === "PlayStation 4",
                  );
                  const hasPc = game.platforms.some(
                    (p) => p.platform?.name === "PC",
                  );
                  const hasLinux = game.platforms.some(
                    (p) => p.platform?.name === "Linux",
                  );
                  const hasAndroid = game.platforms.some(
                    (p) => p.platform?.name === "Android",
                  );
                  const hasNintendo = game.platforms.some(
                    (p) => p.platform?.name === "Nintendo Switch",
                  );
                  const hasVita = game.platforms.some(
                    (p) => p.platform?.name === "PS Vita",
                  );
                  const hasMac = game.platforms.some(
                    (p) => p.platform?.name === "macOS",
                  );
                  const hasIos = game.platforms.some(
                    (p) => p.platform?.name === "iOS",
                  );

                  return (
                    <article
                      key={game.id}
                      className="w-60 h-60 mt-20 relative group"
                    >
                      <div
                        className="w-[100%] h-40 bg-cover bg-center mb-5"
                        style={{
                          backgroundImage: `url(${game.background_image})`,
                        }}
                      ></div>

                      <section>
                        <h2 className="my-2 text-amber-50 text-xl">
                          <Link to={`/game-detail/${game.id}`}>
                            {game.name}
                          </Link>
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
                          {hasIos && (
                            <FaAppStoreIos className="text-amber-50" />
                          )}
                        </div>
                      </section>

                      <button
                        onClick={() => removeFromTracker(game)}
                        className="absolute top-3 right-3 bg-black/60 rounded p-1.5 text-red-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        ✕
                      </button>
                    </article>
                  );
                })}
              </aside>
            )}
          </section>
        );
      })}
    </main>
  );
}

export default TrackerPage;
