import { useContext } from "react";
import { UserData } from "../context/Context";
import { FaPlay } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";

function HeroGameDetail({ value }) {
  const { data } = useContext(UserData);

  const game = data.find((element) => element.id === Number(value));

  if (!game) return <p>Game not found</p>;

  const platformFamilies = [
    ...new Set(
      game.platforms.map(({ platform }) => {
        if (platform?.name?.includes("Xbox")) return "xbox";
        if (platform?.name?.includes("PlayStation")) return "playstation";
        if (platform?.name === "PC") return "pc";
        if (platform?.name === "Linux") return "linux";
        if (platform?.name === "Android") return "android";
        if (platform?.name === "Nintendo Switch") return "nintendo";
        if (platform?.name === "PS Vita") return "vita";
        if (platform?.name === "macOS") return "mac";
        if (platform?.name === "iOS") return "ios";
      }),
    ),
  ].filter(Boolean);

  return (
    <main>
      <section
        className="h-[50vh] bg-cover bg-center flex items-center pl-5"
        style={{ backgroundImage: `url(${game.background_image})` }}
      >
        <section className="w-[80%]">
          <article className="flex items-center gap-7.5">
            <div className="bg-[rgba(0,10,40,0.4)] border border-[#00687A] max-w-[50%] max-h-40 flex items-center justify-evenly gap-2 flex-wrap px-5">
              {game.genres.map((element) => (
                <h2 className="text-amber-50 font-mono" key={element.id}>
                  {element.name}
                </h2>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <IoStar className="text-amber-50 text-shadow-cyan-800 text-shadow-[5px_5px_20px] " />
              <h3 className="text-amber-50 text-shadow-cyan-800 text-shadow-[5px_5px_20px] font-bold font-mono">
                {game.rating} RATING
              </h3>
            </div>
          </article>
          <article>
            <h1 className="text-amber-50 text-[4.5rem] font-mono text-shadow-cyan-800 text-shadow-[5px_5px_20px]">
              {game.name}
            </h1>
          </article>
          <article className="flex h-12.5 gap-10">
            <motion.aside
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 50px rgba(0, 104, 122, 1)",
              }}
              transition={{ duration: 0.6 }}
              className="border-[#00687A] w-40 h-full flex items-center justify-center cursor-pointer bg-[#00687A] gap-2"
            >
              <FaPlay className="cursor-pointer" />
              <button className="text-amber-50 cursor-pointer">
                <Link to="/not-exist">PLAY NOW</Link>
              </button>
            </motion.aside>
            <aside className="w-40 text-center">
              <motion.button
                whileHover={{ backgroundColor: "rgba(0,5,20,0.8)" }}
                transition={{ duration: 0.9 }}
                className="text-amber-50 border border-[#00687A] w-full h-full cursor-pointer bg-[rgba(0,10,40,0.4)]"
              >
                ADD TO LIBRARY
              </motion.button>
            </aside>
          </article>
        </section>
      </section>
      <section className="flex justify-evenly mt-20">
        <article className="border border-white/10 w-[45%] flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-white/50 w-[90%] mx-auto mb-3 mt-10">
            New Comment
          </h2>
          <p className="text-amber-50 w-[90%] mx-auto mb-10">
            {game.description}
          </p>
        </article>
        <article className=" border border-white/10 w-[45%] mb-1 flex flex-col gap-6">
          <h2 className="text-sm uppercase tracking-widest text-white/50 mx-auto mb-3 mt-10 w-[90%]">
            Platforms
          </h2>
          {platformFamilies.map((family) => (
            <aside key={family} className="text-amber-50 w-[90%] mx-auto mb-10">
              {family === "xbox" && (
                <p className="flex gap-5 items-center">
                  <FaXbox className="text-amber-50" />
                  XBOX
                </p>
              )}
              {family === "playstation" && (
                <p className="flex gap-5 items-center">
                  <FaPlaystation className="text-amber-50" />
                  Playstation
                </p>
              )}
              {family === "pc" && (
                <p className="flex gap-5 items-center">
                  <GrPersonalComputer className="text-amber-50" />
                  Descktop
                </p>
              )}
              {family === "linux" && <FaLinux className="text-amber-50" />}
              {family === "android" && (
                <p className="flex gap-5 items-center">
                  <IoLogoAndroid className="text-amber-50" />
                  Android
                </p>
              )}
              {family === "nintendo" && (
                <p className="flex gap-5 items-center">
                  <BsNintendoSwitch className="text-amber-50" /> Nintendo
                </p>
              )}
              {family === "vita" && (
                <p className="flex gap-5 items-center">
                  <SiPlaystationvita className="text-amber-50" />
                  VITA
                </p>
              )}
              {family === "mac" && (
                <p className="flex gap-5 items-center">
                  <MdOutlineDesktopMac className="text-amber-50" />
                  MAC
                </p>
              )}
              {family === "ios" && (
                <p className="flex gap-5 items-center">
                  <FaAppStoreIos className="text-amber-50" />
                  IOS
                </p>
              )}
            </aside>
          ))}
        </article>
      </section>
    </main>
  );
}

export default HeroGameDetail;
