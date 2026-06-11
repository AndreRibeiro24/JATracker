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
    <div>
      <div>
        <input
          type="text"
          placeholder="search game title here..."
          onChange={handleFilter}
        />
      </div>
      <button>Search</button>
    </div>
  );
}
