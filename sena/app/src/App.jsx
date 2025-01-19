import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Blog from './components/Blog'
import Home from './components/Home'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar  />
    <Routes>
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    </Routes>
    </>
  )
}

export default App
