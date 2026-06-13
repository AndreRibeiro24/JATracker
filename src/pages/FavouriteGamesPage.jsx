import { useContext } from "react";
import { UserData } from "../context/Context";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";
import { motion } from "motion/react";

export default function FavouritePage() {
  const { isFavourite, deleteItem } = useContext(UserData);

  return (
    <div className="bg-[#0b1326] font-mono text-white min-h-screen px-4 py-12">
      <div className="w-[90%] mx-auto">
        <h1 className="text-3xl font-bold mb-10">
          Your <span className="text-purple-400">Favourite</span> Games
        </h1>
      </div>
      <section className=" flex flex-wrap gap-7.5 w-[90vw] mx-auto justify-center">
        {isFavourite.map((element) => {
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
            <article key={element.id} className="h-50 w-50 mb-20 relative">
              <aside
                style={{ backgroundImage: `url(${element.background_image})` }}
                className="h-[100%] bg-center bg-cover mb-2.5"
              ></aside>
              <h2 className="mb-3">
                <Link to={`/game-detail/${element.id}`}>{element.name}</Link>
              </h2>
              <motion.button
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.5 }}
                whileTap={{ scale: 1 }}
                className="text-amber-50 absolute top-2 right-2 w-7.5 h-7.5"
                onClick={() => deleteItem(element)}
              >
                <TiDelete className="text-[#00687A] cursor-pointer w-auto h-[100%]" />
              </motion.button>
              <div className="flex gap-3">
                {hasXbox && <FaXbox className="text-amber-50" />}
                {hasPlaystation && <FaPlaystation className="text-amber-50" />}
                {hasPc && <GrPersonalComputer className="text-amber-50" />}
                {hasLinux && <FaLinux className="text-amber-50" />}
                {hasAndroid && <IoLogoAndroid className="text-amber-50" />}
                {hasNintendo && <BsNintendoSwitch className="text-amber-50" />}
                {hasVita && <SiPlaystationvita className="text-amber-50" />}
                {hasMac && <MdOutlineDesktopMac className="text-amber-50" />}
                {hasIos && <FaAppStoreIos className="text-amber-50" />}
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
