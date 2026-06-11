import {useState, useContext} from 'react'
import {UserData} from '../context/Context'

export default function AddGame() {
   const {addGame} = useContext(UserData);

  const [title,setTitle] = useState("");
  const [genre,setGenre] = useState("");
  const [description,setDescription] = useState("");
  const [heroImage, setHeroImage] = useState("");
  const [screenshots, setScreenshots] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [rating,setRating] = useState(0);

  const GENRES = [ "Action", "Adventure", "RPG", "Strategy", "Simulation",
    "Sports", "Racing", "Puzzle", "Horror", "FPS", "MMO", "Indie",   
  ];

  const PLATFORMS = [
    { id: "pc", label: "PC" },
    { id: "ps5", label: "PS5" },
    { id: "xbox", label: "Xbox" },
    { id: "switch", label: "Switch" },
    { id: "mobile", label: "Mobile" },
    { id: "mac", label: "Mac" },
  ];

  const handlePublish = () =>{
  
  if (!title || !genre || !description){
    alert("Please fill in all required fields")
    return;
  }

  addGame({
    name: title,
    description,
    background_image: heroImage,
    genres: [{name:genre}],
    platforms: selectedPlatforms.map(p => ({platform: {name:p}})),
    short_screenshots: screenshots
    .filter(s => s!== "")
    .map((s,i)=> ({id:1,image:s})),
    rating,
    //ATTENTION. When Favourite is built on the context, its page, remember to add here too.
  })
    //Reset Form 
    setTitle("");
    setGenre("");
    setDescription("");
    setHeroImage("");
    setScreenshots(["", "", "", ""]);
    setSelectedPlatforms([]);
    setRating(0)
  }
  return (
    <div>
        <section>
          <h2>Game Information</h2>
          <input 
          type="text"
          placeholder="Enter game title..."
          value={title}
          onChange = {e=> setTitle(e.target.value)}
          />

        </section>
    </div>
  )
}
