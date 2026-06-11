import {useState, useEffect, useContext} from "react"
import {UserData} from "../context/Context"
export default function AddGamePage() {
  const {addGame} = useContext(UserData);

  const [title,setTitle] = useState("");
  const [genre,setGenre] = useState("");
  const [description,setDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [screenshots, setScreenshots] = useState("");

  const GENRES = [
    
  ]

  return (
    <div>AddGamePage</div>
  )
}
