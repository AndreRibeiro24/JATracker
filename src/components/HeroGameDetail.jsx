import { useContext } from "react";
import { UserData } from "../context/Context";
import { FaPlay } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";
import { motion } from "motion/react";

function HeroGameDetail({ value }) {
  const { data } = useContext(UserData);

  const game = data.find((element) => element.id === Number(value));

  if (!game) return <p>Game not found</p>;

  return (
    <main>
      <section
        className="h-[50vh] bg-cover bg-center flex items-center pl-5"
        style={{ backgroundImage: `url(${game.background_image})` }}
      >
        <section className=" w-[80%]">
          <article className="flex items-center gap-7.5">
            <div className="bg-[rgba(0,10,40,0.4)] border border-[#00687A] max-w-[50%] max-h-40 flex items-center justify-evenly gap-2 flex-wrap px-5">
              {game.genres.map((element) => (
                <h2 className="text-amber-50 font-mono" key={element.id}>
                  {element.name}
                </h2>
              ))}
            </div>
            <div className="flex items-center gap-1">
              <IoStar className="text-gray-500 text-shadow-amber-50 text-shadow-[5px_5px_60px]" />
              <h3 className="text-gray-500 font-bold font-mono">
                {game.rating} RATING
              </h3>
            </div>
          </article>
          <article className="">
            <h1 className="text-amber-50 text-[4.5rem] font-mono text-shadow-cyan-800 text-shadow-[5px_5px_20px]">
              {game.name}
            </h1>
          </article>
          <article className="flex h-12.5 gap-10 ">
            <motion.aside
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 50px rgba(0, 104, 122, 1)",
              }}
              transition={{ duration: 0.6 }}
              className="border-[#00687A] w-40 h-[100%] flex items-center justify-center cursor-pointer bg-[#00687A] gap-2"
            >
              <FaPlay className="cursor-pointer" />
              <button className="text-amber-50 cursor-pointer">PLAY NOW</button>
            </motion.aside>
            <aside className=" w-40 text-center">
              <motion.button
                whileHover={{ backgroundColor: "rgba(0,5,20,0.8)" }}
                transition={{ duration: 0.9 }}
                className="text-amber-50 border border-[#00687A] w-[100%] h-[100%] cursor-pointer bg-[rgba(0,10,40,0.4)]"
              >
                ADD TO LIBRARY
              </motion.button>
            </aside>
          </article>
        </section>
      </section>
      <section>
        <p>{game.description}</p>
      </section>
    </main>
  );
}

export default HeroGameDetail;
