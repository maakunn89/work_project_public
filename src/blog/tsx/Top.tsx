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
        <div className="top_title">
          <span className="phead">P</span>
          rincipal Dawn</div>
          <div className="top_description">まーくん/maakunn89 のホームページです。</div>
          <div className="top_new">2026/07/15更新：Works&gt;othersにLINEスタンプを追加しました。</div>
          <div className="top_entrance">
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
    </div>
  )
}

export default Top
