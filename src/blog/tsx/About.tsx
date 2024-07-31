import React from 'react'
import '../css/About.css'
import { Helmet } from 'react-helmet-async'

const About = () => {
  const componentName = 'About'
  return (
    <div className="content_wrapper">
      <Helmet>
        <title>Principal Dawn | {componentName}</title>
      </Helmet>
      <div className="page_title">
        About
        <p className="title_description">このサイトと自分について</p>
      </div>
      <div className="contents text">
        <div>のホームページです。</div>
        <div>絵を描いたりプログラミングをしたりしながら暮らしています。</div>
        <div>普段は主にTwitterにいますが、こちらも時々更新します。</div>
      </div>
    </div>
  )
}

export default About
