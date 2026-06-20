import CommentSection from "../components/CommentSection";
import Banner from "../components/HeroGameDetail";
import { useParams } from "react-router-dom";

export default function GameDetailPage() {
  const { id } = useParams();
  return (
    <main>
      <Banner value={id} />
      <CommentSection value={id} />
    </main>
  );
}
