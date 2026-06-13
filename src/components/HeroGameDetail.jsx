import { useContext } from "react";
import { UserData } from "../context/Context";
import { FaPlay } from "react-icons/fa6";
import { IoStar } from "react-icons/io5";

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
        <section className="border-2 border-rose-500 w-[80%]">
          <article className="flex items-center">
            {game.genres.map((element) => (
              <h2 className="text-amber-50" key={element.id}>
                {element.name}
              </h2>
            ))}
            <IoStar className="text-amber-50" />
            <h3 className="text-amber-50">{game.rating} RATING</h3>
          </article>
          <article className="">
            <h1 className="text-amber-50 text-[4.5rem] font-mono">
              {game.name}
            </h1>
          </article>
          <article className="flex h-12.5 w-[50%] justify-center gap-10">
            <aside className="border-2 border-amber-50 w-40  flex items-center justify-center cursor-pointer">
              <FaPlay className="bg-amber-500 " />
              <button className="text-amber-50 ">PLAY NOW</button>
            </aside>
            <aside className="border-2 border-amber-50 w-40 text-center">
              <button className="text-amber-50 border-2w-[100%] h-[100%] cursor-pointer">
                ADD TO LIBRARY
              </button>
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
