import { DataContext } from "./DataContext.jsx";
import {useState, useEffect} from "react"
import axios from 'axios'

const api = axios.create({
  baseURL : "https://raw.githubusercontent.com/Julianrussmeyer/JATracker-backend/refs/heads/main/db.json",
})

export function DataProvider({ children }) {
  const [data, setData] = useState([]);
        
  const fetchData = async() => {
    try {
      const games = await api.get("")
      const total = games.data;
      setData(total)
      console.log(total)
      
      
    } catch (error) {
      console.log("error")
    }
  }

  useEffect(() => {
    console.log(data);
    fetchData();
  },[])


  return (
    <DataContext.Provider value={{data, setData}}>
      {children}
    </DataContext.Provider>
  );
}