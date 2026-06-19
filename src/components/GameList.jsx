import { useContext, useRef } from "react";
import { UserData } from "../context/Context";
import { FaPlaystation, FaXbox, FaLinux, FaAppStoreIos } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";
import { IoLogoAndroid } from "react-icons/io";
import { BsNintendoSwitch } from "react-icons/bs";
import { SiPlaystationvita } from "react-icons/si";
import { MdOutlineDesktopMac } from "react-icons/md";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function PlatformIcons({ platforms }) {
  const hasXbox = platforms.some(
    (p) =>
      p.platform?.name === "Xbox Series S/X" ||
      p.platform?.name === "Xbox 360" ||
      p.platform?.name === "Xbox One",
  );
  const hasPlaystation = platforms.some(
    (p) =>
      p.platform?.name === "PlayStation 5" ||
      p.platform?.name === "PlayStation 4",
  );
  const hasPc = platforms.some((p) => p.platform?.name === "PC");
  const hasLinux = platforms.some((p) => p.platform?.name === "Linux");
  const hasAndroid = platforms.some((p) => p.platform?.name === "Android");
  const hasNintendo = platforms.some(
    (p) => p.platform?.name === "Nintendo Switch",
  );
  const hasVita = platforms.some((p) => p.platform?.name === "PS Vita");
  const hasMac = platforms.some((p) => p.platform?.name === "macOS");
  const hasIos = platforms.some((p) => p.platform?.name === "iOS");

  return (
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
  );
}

function GameCard({
  element,
  isFavourite,
  addItem,
  deleteItem,
  trackerList,
  addToTracker,
  removeFromTracker,
}) {
  const trackerStatus =
    trackerList.find((g) => g.id === element.id)?.status || "";

  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ amount: "all", once: true }}
      transition={{ duration: 2.5 }}
      className="w-60 h-60 mt-20 relative mx-auto flex-shrink-0"
    >
      <Link to={`/game-detail/${element.id}`}>
        <div
          className="w-[100%] h-40 bg-cover bg-center mb-5"
          style={{ backgroundImage: `url(${element.background_image})` }}
        />
      </Link>
      <section>
        <h2 className="my-2 text-amber-50 text-xl">
          <Link to={`/game-detail/${element.id}`}>{element.name}</Link>
        </h2>
        <PlatformIcons platforms={element.platforms} />
      </section>
      <motion.button
        className="absolute top-3 right-3 bg-black/60 rounded p-1.5"
        whileHover={{ scale: 1.3 }}
        whileTap={{ scale: 1 }}
        onClick={() => {
          isFavourite.some((fav) => fav.id === element.id)
            ? deleteItem(element)
            : addItem(element);
        }}
      >
        {isFavourite.some((fav) => fav.id === element.id) ? (
          <AiFillStar className="text-[#FFD700] cursor-pointer w-5 h-5" />
        ) : (
          <AiOutlineStar className="text-[#FFD700] cursor-pointer w-5 h-5" />
        )}
      </motion.button>
      <select
        value={trackerStatus}
        onChange={(e) => {
          if (e.target.value === "") {
            removeFromTracker(element);
          } else {
            addToTracker(element, e.target.value);
          }
        }}
        className="absolute bottom-16 right-0 text-xs bg-[#0b1326] text-amber-50 border border-purple-500/40 rounded px-1 py-0.5 cursor-pointer focus:outline-none"
      >
        <option value="">+ Track</option>
        <option value="playing"> Playing</option>
        <option value="played"> Played</option>
        <option value="want"> Want to Play</option>
      </select>
    </motion.article>
  );
}

function GameList() {
  const {
    data,
    filteredData,
    isFiltering,
    addItem,
    deleteItem,
    hasFavourite,
    isFavourite,
    trackerList,
    addToTracker,
    removeFromTracker,
    sugest,
  } = useContext(UserData);

  const carouselRef = useRef(null);
  const gamesToShow = isFiltering ? filteredData : data;
  const cardProps = {
    isFavourite,
    addItem,
    deleteItem,
    trackerList,
    addToTracker,
    removeFromTracker,
  };

  function scrollLeft() {
    carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
  }

  function scrollRight() {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  }

  return (
    <main className="w-[100vw] mx-auto pb-40 bg-[#0b1326]">
      {hasFavourite && (
        <section className="w-[90%] mx-auto mb-20 ">
          <aside className="flex items-center gap-5 mb-2">
            <div className="bg-[#00687A] w-2 h-10" />
            <h2 className="text-[#ffffff] font-mono font-bold text-xl">
              Based on your favorites
            </h2>
          </aside>
          <div className="relative">
            <button
              onClick={scrollLeft}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-[#0b1326]/80 border border-[#00687A] text-amber-50 p-2 rounded-full hover:bg-[#00687A] transition-colors cursor-pointer"
            >
              <IoChevronBackOutline className="w-5 h-5" />
            </button>
            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto scroll-smooth px-10 pb-5 w-[90%] mx-auto"
              style={{ scrollbarWidth: "none" }}
            >
              {sugest.map((element) => (
                <GameCard key={element.id} element={element} {...cardProps} />
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-[#0b1326]/80 border border-[#00687A] text-amber-50 p-2 rounded-full hover:bg-[#00687A] transition-colors cursor-pointer"
            >
              <IoChevronForwardOutline className="w-5 h-5" />
            </button>
          </div>
        </section>
      )}

      <section>
        <aside className="flex items-center w-[90vw] mx-auto gap-5">
          <div className="bg-[#00687A] w-2 h-10" />
          <h2 className="text-[#ffffff] font-mono font-bold text-xl">
            All games
          </h2>
        </aside>
        <aside className="flex flex-wrap justify-start gap-5 w-[90%] mx-auto">
          {gamesToShow.map((element) => (
            <GameCard key={element.id} element={element} {...cardProps} />
          ))}
        </aside>
      </section>
    </main>
  );
}

export default GameList;
