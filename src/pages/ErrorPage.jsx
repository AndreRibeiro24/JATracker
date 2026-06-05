import React from 'react'
import { useContext } from 'react'                // At every age we must to import the useContext, because without this we can not use it
import { UserData } from '../context/Context'     //Second, we must to import the createContext() to take the data


export default function ErrorPage() {
  
  const {data} = useContext(UserData);          // Here we destructuring from an object the data we want to use
  
  

  return (
  <div>
    <h1>Error Page</h1>
    {data.map((element) => (
      <h1 key={element.id}>{element.name}</h1>
    ))}
    
  </div>
)}



