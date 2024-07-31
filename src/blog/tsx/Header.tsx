import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
    <div className="header_content">
      <div className="header_title">Header</div>
      <div className="header_links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/works">Works</Link>
        <Link to="/links">Links</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  )
}

export default Header
