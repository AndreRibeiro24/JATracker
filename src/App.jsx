import React from 'react'
import Error from './pages/ErrorPage.jsx'
import { useContext } from 'react'
import { UserData } from './context/Context.jsx'

export default function App() {

  const {loading} = useContext(UserData)

  if(loading){
      return (
        <main>
          <p>Loading ...</p>
        </main>
      )
    }
  


  return (
    <div>
      <h1> Hello world </h1>
      <Error/>
    </div>
  )
}
