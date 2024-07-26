import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './blog/tsx/Home'
import About from './blog/tsx/About'
import Works from './blog/tsx/Works'
import Links from './blog/tsx/Links'
import Contact from './blog/tsx/Contact'
import Layout from './blog/tsx/Layout'
import Notfound from './blog/tsx/Notfound'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/links" element={<Links />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
