import React from 'react'
import '../css/Links.css'
import { Helmet } from 'react-helmet-async'

const Links = () => {
  const componentName = 'Links'
  return (
    <div className="content_wrapper">
      <Helmet>
        <title>Principal Dawn | {componentName}</title>
      </Helmet>
      <div className="page_title">
        Links
        <p className="title_description">他の活動場所</p>
      </div>
      <div className="contents text">
        <div>のホームページです。</div>
        <div>絵を描いたりプログラミングをしたりしながら暮らしています。</div>
        <div>普段は主にTwitterにいますが、こちらも時々更新します。</div>
      </div>
    </div>
  )
}

export default Links
