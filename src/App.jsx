import React from 'react'
import Error from './pages/ErrorPage.jsx'
import { useContext } from 'react'
import { UserData } from './context/Context.jsx'
import {Routes, Route} from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx"
import AddGamePage from './pages/AddGamePage.jsx'
import GameDetailPage from './pages/GameDetailPage'
import GameListPage from './pages/GameListPage'
import ErrorPage from './pages/ErrorPage'
import AboutUsPage from './pages/AboutUsPage'

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
     <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-game" element={<AddGamePage/>}/>
        <Route path="/game-detail" element={<GameDetailPage/>}/>
        <Route path="/game-list" element={<GameListPage/>}/>
        <Route path= "*" element={<ErrorPage/>}/>
        <Route path="/about-us" element={<AboutUsPage/>}/>
     </Routes>
    </div>
  )
}
