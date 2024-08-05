import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Top.css'
import { Helmet } from 'react-helmet-async'

const Top = () => {
  return (
    <div className="content_wrapper">
      <Helmet>
        <title>Principal Dawn</title>
      </Helmet>
      <div className="contents">
        <Link className="link" to="/about">
          About
        </Link>
        <Link className="link" to="/works">
          Works
        </Link>
        <Link className="link" to="/links">
          Links
        </Link>
        <Link className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Top
