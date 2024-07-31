import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Works.css'

const Notfound = () => {
  return (
    <div className="content_wrapper">
      <div className="page_title">
        Not found
        <p className="title_description">ページが見つかりませんでした</p>
      </div>
      <div className="contents text">
        <div>お手数ですが、URLをお確かめの上再度アクセスするか、</div>
        <div>
          <Link to="/" className="link">
            トップへ
          </Link>
          お戻りください。
        </div>
      </div>
    </div>
  )
}

export default Notfound
