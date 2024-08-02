import React from 'react'
import '../css/Secret.css'
import { Helmet } from 'react-helmet-async'

const Secret = () => {
  const componentName = 'Secret'
  return (
    <div className="content_wrapper">
      <div className="secret_img">
        <Helmet>
          <title>Principal Dawn | {componentName}</title>
        </Helmet>
        <div className="secret_bg">
          <div className="page_title">
            Secret
            <p className="title_description">みんなにはないしょだよ</p>
          </div>
          <div className="contents text">
            <div>何を入れるかは未定です　とりあえず見つけた君はすごい</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Secret
