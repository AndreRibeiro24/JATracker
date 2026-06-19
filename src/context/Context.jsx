import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

export const UserData = createContext(); // This is the context object and we import it at each component to take the data

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // To have access to json-server repo at Github, you go at the file db.jsx and copy paste the raw URL
}); // Normaly when you have API key you must to add headers: { 'Authorization' :  , 'x-api-key' : }

export function UserProvider({ children }) {
  // We import the UserProvider only to wrap the components we want to share the data

  const [data, setData] = useState([]); // State to store the fetched data. Starts as empty array
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  const [isFavourite, setIsFavourite] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [hasFavourite, setHasFavourite] = useState(false);
  const [comments, setComments] = useState([]);
  const [trackerList, setTrackerList] = useState([]);
  const [sugest, setSugest] = useState([]);

  console.log(sugest);
  console.log(isFavourite);

  function ExeptFav() {
    // Count how many times each genre appears in favourites
    const genreCount = {};
    isFavourite.forEach((fav) => {
      fav.genres.forEach((g) => {
        genreCount[g.id] = (genreCount[g.id] || 0) + 1;
      });
    });

    const favouriteIds = isFavourite.map((fav) => fav.id);

    // Score each game by how many times its genres appear in favourites
    const scored = data
      .filter((game) => !favouriteIds.includes(game.id))
      .map((game) => {
        const score = game.genres.reduce(
          (total, g) => total + (genreCount[g.id] || 0),
          0,
        );
        return { ...game, score };
      })
      .filter((game) => game.score > 0) // only games with at least one matching genre
      .sort((a, b) => b.score - a.score); // highest score first

    setSugest(scored);
  }

  useEffect(() => {
    if (isFavourite.length > 0) {
      ExeptFav();
    } else {
      setSugest([]);
    }
  }, [isFavourite]);

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
  // To develop next: Toggle favourite for the games that are added as favourite

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const gamesResponse = await api.get("/games");
        const commentsResponse = await api.get("/comments");

        setLoading(false); // The response from axios is a data object
        setData(gamesResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false); // After all goes to the finally, where we set the loading at false
      }
    };

    getData();
  }, []); // Runs once when the component mounts. The [] means no dependencies - never runs again

  // Here we will create the functions and pass them from the UserData.Provider

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
