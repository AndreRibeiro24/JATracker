import React from 'react'
import { useContext } from 'react'                // At every age we must to import the useContext, because without this we can not use it
import { UserData } from '../context/Context'     //Second, we must to import the createContext() to take the data
import { FaArrowLeft, FaArrowRight, FaBars, FaMagnifyingGlass, FaHeart, FaGithub, FaPlaystation, FaXbox} from 'react-icons/fa6'
import { Si1Panel } from "react-icons/si";
import { BsNintendoSwitch } from "react-icons/bs";  // The react-iconsis a package with many Icon libraries, you need to import the library with the name of the icon you want to use




export default function ErrorPage() {
  
  const {data, setData} = useContext(UserData);          // Here we destructuring from an object the data we want to use
  
  if (!data || data.length === 0) return <p>Loading...</p>

  return (
  <div>
    <h1>Error Page</h1>

    
  </div>
)}



