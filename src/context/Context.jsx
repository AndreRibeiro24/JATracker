import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function UserProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [isFavourite, setIsFavourite] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [hasFavourite, setHasFavourite] = useState(false);
  const [comments, setComments] = useState([]);
  const [trackerList, setTrackerList] = useState([]);
  const [sugest, setSugest] = useState([]);

  useEffect(() => {
    if (isFavourite.length === 0 || data.length === 0) {
      setSugest([]);
      return;
    }

    const genreCount = {};
    isFavourite.forEach((fav) => {
      fav.genres.forEach((g) => {
        genreCount[g.id] = (genreCount[g.id] || 0) + 1;
      });
    });

    const favouriteIds = isFavourite.map((fav) => fav.id);

    const scored = data
      .filter((game) => !favouriteIds.includes(game.id))
      .map((game) => {
        const score = game.genres.reduce(
          (total, g) => total + (genreCount[g.id] || 0),
          0,
        );
        return { ...game, score };
      })
      .filter((game) => game.score > 0)
      .sort((a, b) => b.score - a.score);

    setSugest(scored);
  }, [isFavourite, data]);

  function addToTracker(game, status) {
    setTrackerList((prev) => {
      const exists = prev.find((g) => g.id === game.id);
      if (exists) {
        return prev.map((g) => (g.id === game.id ? { ...g, status } : g));
      }
      return [...prev, { ...game, status }];
    });
  }

  function removeFromTracker(game) {
    setTrackerList((prev) => prev.filter((g) => g.id !== game.id));
  }

  const addGame = async (game) => {
    try {
      const response = await api.post("/games", game);
      setData((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (comment) => {
    const response = await api.post("/comments", comment);
    setComments((prev) => [...prev, response.data]);
    return response.data;
  };

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const gamesResponse = await api.get("/games");
        const commentsResponse = await api.get("/comments");
        setData(gamesResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  const handleFilter = (e) => {
    const searchWord = e.target.value;

    if (!searchWord.trim()) {
      setIsFiltering(false);
      setFilteredData(data);
      return;
    }

    setIsFiltering(true);
    const newFilter = data.filter((game) =>
      game.name.toLowerCase().trim().includes(searchWord.toLowerCase().trim()),
    );
    setFilteredData(newFilter);
  };

  function resetFilter() {
    setIsFiltering(false);
    setFilteredData([]);
  }

  function addItem(game) {
    const item = isFavourite.some((element) => element.id === game.id);
    if (item) return;
    setIsFavourite((prev) => [...prev, game]);
  }

  function deleteItem(game) {
    const item = isFavourite.filter((element) => element.id !== game.id);
    setIsFavourite(item);
  }

  useEffect(() => {
    setHasFavourite(isFavourite.length > 0);
  }, [isFavourite]);

  return (
    <UserData.Provider
      value={{
        data,
        loading,
        addGame,
        handleFilter,
        resetFilter,
        filteredData,
        isFiltering,
        comments,
        addComment,
        isFavourite,
        hasFavourite,
        setIsFavourite,
        addItem,
        deleteItem,
        trackerList,
        addToTracker,
        removeFromTracker,
        sugest,
      }}
    >
      {children}
    </UserData.Provider>
  );
}
