import Banner from "../components/HeroGameDetail";
import { useParams } from "react-router-dom";

export default function GameDetailPage() {
  const { id } = useParams();
  console.log(id);
  return (
    <main>
      <Banner value={id} />
    </main>
  );
}
