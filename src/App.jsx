import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
