import React from 'react'
import {DataContext} from '../context/DataContext.jsx'
import {useContext} from "react"

export default function ErrorPage() {
  
  const {data, setData} = useContext(DataContext);
  // console.log(data);
  const {games} = data;
  console.log(games)
  return (
    <div>
        <h1>Error Page</h1>
        <p>{games}</p>
        
    </div>
  )
}



// {games.map((game) => {
//   const { id, name, background_image, rating, metacritic } = game;

//   return (
//     <div key={id}>
//       <h2>{name}</h2>
//       <img src={background_image} alt={name} />
//       <p>Rating: {rating}</p>
//       <p>Metacritic: {metacritic}</p>
//     </div>
//   );
// })}