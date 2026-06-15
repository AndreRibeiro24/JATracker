import { useContext } from "react";
import { UserData } from "./context/Context.jsx";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AddGamePage from "./pages/AddGamePage.jsx";
import GameDetailPage from "./pages/GameDetailPage";
import ErrorPage from "./pages/ErrorPage";
import AboutUsPage from "./pages/AboutUsPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FavouriteGamesPage from "./pages/FavouriteGamesPage.jsx";
import TrackerPage from "./pages/TrackerPage";

export default function App() {
  const { loading } = useContext(UserData);

  if (loading) {
    return (
      <main>
        <p>Loading ...</p>
      </main>
    );
  }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-game" element={<AddGamePage />} />
        <Route path="/game-detail/:id" element={<GameDetailPage />} />
        <Route path="/not-exist" element={<ErrorPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/favourite-games" element={<FavouriteGamesPage />} />
        <Route path="/favourite-games" element={<FavouriteGamesPage />} />
        <Route path="/games-tracker" element={<TrackerPage />} />
      </Routes>
      <Footer />
    </div>
  );
}
