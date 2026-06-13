import { useContext } from "react";
import { UserData } from "../context/Context";

export default function Searchbar({ onResult }) {
  const { data, loading, handleFilter } = useContext(UserData);
  // const [query, setQuery] = useState("");
  // const games = data || [];
  if (loading) return <p>Loading...</p>;

  {
    /*function handleChange(e){
    const value = e.target.value;
    setQuery(value);
    const q = value.toLowerCase().trim() //no matter how is typedd search will deliver the game
    if (!q){
      onResult(null)
      return
    }
    const filtered = games.filter((game)=>
    game.name.toLowerCase().includes(q));
    onResult(filtered);
  }

  function handleKeyDown(e){
    if (e.key === "Enter") handleSearch();

  }

  function handleSearch(){
    const q = query.toLowerCase().trim();
    if (!q) {onResult(null); return}
    onResult(games.filter((game)=>game.name.toLowerCase().includes(q)));


  }*/
  }
  return (
    <div className="flex gap-2 w-full max-w-xl">
        <input
          type="text"
          placeholder="search game title here..."
          onChange={handleFilter}
          className = "flex-1 bg-[#111c30] border border-white/10 text-white font-mono placeholder-white/30 rounded px-4 py-2 focus:outline-none focus:border-purple-500 transition"
        />

      <button className="px-4 py-2 rounded border border-purple-500 text-purple-400 font-mono text-sm uppercase tracking-widest hover:bg-purple-500/10 transition">Search</button>
    </div>
  );
}
