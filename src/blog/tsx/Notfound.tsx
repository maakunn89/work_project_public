import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Works.css'

const Notfound = () => {
  return (
    <div className="content_wrapper">
      <div className="page_title">Not found</div>
      <div className="text">
        <div>ページが見つかりませんでした。</div>
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
