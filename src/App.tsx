import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import About from './blog/About'
import Home from './blog/Home'
import Contact from './blog/Contact'
import Works from './blog/Work'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
