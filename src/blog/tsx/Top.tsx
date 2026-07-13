import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Top.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import { Helmet } from 'react-helmet-async'

const Top = () => {
  return (
    <div className="content_wrapper_top">
      <Helmet>
        <title>Principal Dawn</title>
      </Helmet>
      <div className="contents">
        <div className="top_title">
          <span className="phead">P</span>
          rincipal Dawn
        </div>
        <div className="top_description">まーくん/maakunn89 のホームページです。</div>
        <div className="top_new">2026/07/13更新：About・Works &gt; それぞれ情報を最新のものに更新しました。</div>
        <div className="top_new">2025/01/28更新：Works &gt; othersに同人誌を追加しました。</div>
        <div className="top_attention">※現在モバイル版の表示を調整中です。<br/>表示が崩れる場合、お手数ですがPC版での表示をお試しください。</div>
        <div className="top_entrance">
          <a className="link top_link" href="/about">
            <div className="top_link_title">About</div>
            <div className="top_link_description">このサイトと自分について</div>
            <ArrowForwardIcon className='arrow_icon'/>
          </a>
        </div>
        <div className="top_entrance">
          <a className="link top_link" href="/works">
            <div className="top_link_title">Works</div>
            <div className="top_link_description">作品など</div>
            <ArrowForwardIcon className='arrow_icon'/>
          </a>
        </div>
        <div className="top_entrance">
          <a className="link top_link" href="/links">
            <div className="top_link_title">Links</div>
            <div className="top_link_description">他の活動場所</div>
            <ArrowForwardIcon className='arrow_icon'/>
          </a>
        </div>
        <div className="top_entrance">
          <a className="link top_link" href="/contact">
            <div className="top_link_title">Contact</div>
            <div className="top_link_description">ご連絡はこちら</div>
            <ArrowForwardIcon className='arrow_icon'/>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Top
