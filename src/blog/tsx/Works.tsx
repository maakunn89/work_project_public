import React from 'react'
import '../css/Works.css'
import { Helmet } from 'react-helmet-async'

const Works = () => {
  const componentName = 'Works'
  return (
    <div className="content_wrapper">
      <Helmet>
        <title>Principal Dawn | {componentName}</title>
      </Helmet>
      <div className="page_title">
        Works
        <p className="title_description">作品やお仕事など</p>
      </div>
      <div className="contents text">
        <div>のホームページです。</div>
        <div>絵を描いたりプログラミングをしたりしながら暮らしています。</div>
        <div>普段は主にTwitterにいますが、こちらも時々更新します。</div>
      </div>
    </div>
  )
}

export default Works
