import React from 'react'
import logo from '../logo.svg'
import { Link } from 'react-router-dom'
import '../App.css'

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Home</p>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/links">Links</Link>
        <Link to="/contact">Contact</Link>
      </header>
    </div>
  )
}

export default Home
