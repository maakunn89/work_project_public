import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowForward } from '@mui/icons-material'
import '../css/Top.css'
import { Helmet } from 'react-helmet-async'

const Top = () => {
  return (
    <div className="content_wrapper_top">
      <Helmet>
        <title>Principal Dawn</title>
      </Helmet>
      <div className="contents">
        <div className="top_title">
          <span className="phead">P</span>rincipal Dawn
        </div>
        <div className="top_description">まーくん/maakunn89 のホームページです。</div>
        <div className="top_entrance">
          <Link className="link top_link" to="/about">
            <div className="top_link_title">About</div>
            <div className="top_link_description">このサイトと自分について</div>
            <ArrowForward
              style={{ display: 'flex', scale: '2', marginLeft: 'auto', marginRight: '20px', marginTop: '-60px' }}
            ></ArrowForward>
          </Link>
        </div>
        <div className="top_entrance">
          <Link className="link top_link" to="/works">
            <div className="top_link_title">Works</div>
            <div className="top_link_description">作品など</div>
            <ArrowForward
              style={{ display: 'flex', scale: '2', marginLeft: 'auto', marginRight: '20px', marginTop: '-60px' }}
            ></ArrowForward>
          </Link>
        </div>
        <div className="top_entrance">
          <Link className="link top_link" to="/links">
            <div className="top_link_title">Links</div>
            <div className="top_link_description">他の活動場所</div>
            <ArrowForward
              style={{ display: 'flex', scale: '2', marginLeft: 'auto', marginRight: '20px', marginTop: '-60px' }}
            ></ArrowForward>
          </Link>
        </div>
        <div className="top_entrance">
          <Link className="link top_link" to="/contact">
            <div className="top_link_title">Contact</div>
            <div className="top_link_description">ご連絡はこちら</div>
            <ArrowForward
              style={{ display: 'flex', scale: '2', marginLeft: 'auto', marginRight: '20px', marginTop: '-60px' }}
            ></ArrowForward>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Top
