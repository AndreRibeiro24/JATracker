import { useContext, useState } from "react";
import { UserData } from "../context/Context";
import { GrFormClose } from "react-icons/gr";

export default function Searchbar() {
  const { resetFilter } = useContext(UserData);
  const { loading, handleFilter } = useContext(UserData);
  const [searchWord, setSearchWord] = useState("");

  function handleSearchChange(e) {
    setSearchWord(e.target.value);
    handleFilter(e);
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="flex gap-2 w-full max-w-xl">
      <input
        type="text"
        placeholder="search game title here..."
        onChange={handleSearchChange}
        className="flex-1 bg-[#111c30] border border-white/10 text-white font-mono placeholder-white/30 rounded px-4 py-2 focus:outline-none focus:border-purple-500 transition"
        value={searchWord}
      />

      <button
        onClick={() => {
          resetFilter();
          setSearchWord("");
        }}
        className="px-3 py-1 rounded border border-purple-500 text-purple-400 font-mono text-sm uppercase tracking-widest hover:bg-purple-500/10 transition"
      >
        <GrFormClose  className="h-4 w-auto"/>
      </button>
    </div>
  );
}
