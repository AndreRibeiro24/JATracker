import { useContext } from "react";
import { UserData } from "../context/Context";

function HeroGameDetail({ value }) {
  const { data } = useContext(UserData);

  const game = data.find((element) => element.id === Number(value));

  if (!game) return <p>Game not found</p>;

  return (
    <main style={{ backgroundImage: "url()" }}>
      <h1>{game.name}</h1>
      <p>{game.description}</p>
    </main>
  );
}

export default HeroGameDetail;
