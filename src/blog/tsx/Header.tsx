import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  return (
    <div className="header_content">
      <div className="header_title">Principal Dawn</div>
      <div className="header_links">
        <Link className="header_link" to="/">
          Top
        </Link>
        <Link className="header_link" to="/about">
          About
        </Link>
        <Link className="header_link" to="/works">
          Works
        </Link>
        <Link className="header_link" to="/links">
          Links
        </Link>
        <Link className="header_link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
