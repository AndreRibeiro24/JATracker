import { useContext } from "react";
import { UserData } from "../context/Context";

function HeroGameDetail() {
  const { data } = useContext(UserData);

  return (
    <main style={{ backgroundImage: "url()" }}>
      <section></section>
    </main>
  );
}

export default HeroGameDetail;
