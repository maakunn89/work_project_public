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
      <Link to="/about">About</Link>
      <Link to="/works">Works</Link>
      <Link to="/links">Links</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Top
