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
  const [isFiltering, setIsFiltering] = useState(false);
  const [userGames, setUserGames] = useState([]); // Information pushed from the Add Game form

  const addGame = async (game) => {
    try {
      const response = await api.post("/games", game);
      setUserGames((prev) => [...prev, response.data]);
    } catch (error) {
      console.log(error);
    }
  };
  // To develop next: Toggle favourite for the games that are added as favourite

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await api.get(""); // if you are allready there you can leave it empty string

        setLoading(false); // The response from axios is a data object
        const data = response.data.games; // Always we go to data and then to the array
        setData(data);
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

  return (
    <UserData.Provider
      value={{
        data,
        loading,
        userGames,
        addGame,
        handleFilter,
        filteredData,
        isFiltering,
      }}
    >
      {" "}
      {/* Makes data available to every component wrapped inside UserProvider. Any component can acces it with useContext(UserData) */}
      {children}{" "}
      {/* if value={data} this means that we have the array value, else value={{data}} we have an object */}
    </UserData.Provider>
  );
}

/*
value={data} — passes the array directly:
jsx// context
<UserData.Provider value={data}>
data = [{ id: 1, name: 'Game 1' }, { id: 2, name: 'Game 2' }]

component
const value = useContext(UserData)
value = [{ id: 1, name: 'Game 1' }, { id: 2, name: 'Game 2' }]

value.map(...)     // ✅ works
value.data         // ❌ undefined - no .data property on an array

value={{ data }} — passes an object that contains the array:
jsx// context
<UserData.Provider value={{ data }}>
value = { data: [{ id: 1, name: 'Game 1' }, { id: 2, name: 'Game 2' }] }

component
const value = useContext(UserData)
value = { data: [...] }

value.data.map(...)   // ✅ works
value.map(...)        // ❌ value is an object, not an array

Use {{ data }} when you want to pass multiple things:
jsx<UserData.Provider value={{ data, loading, name }}>

component
value.data
value.loading
value.name



❌ can't pass multiple values as array
<UserData.Provider value={data}>

✅ use object to pass multiple values
<UserData.Provider value={{ data, loading, name }}>

*/
