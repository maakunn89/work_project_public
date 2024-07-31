import React from 'react'
import { Link } from 'react-router-dom'
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
        <div className="links_heading">
          SNS
          <div className="links_row">
            <Link className="link" to="https://twitter.com/maakunn89">
              Twitter
            </Link>
            <div className="links_description">一番よくいる場所です</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://bsky.app/profile/mk89.bsky.social">
              Bluesky
            </Link>
            <div className="links_description">時々動かします（兼避難所）</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://misskey.io/@maakunn89">
              misskey.io
            </Link>
            <div className="links_description">時々動かします（兼避難所）</div>
          </div>
        </div>
        <div className="links_heading">
          作品投稿所
          <div className="links_row">
            <Link className="link" to="https://www.pixiv.net/users/10358070">
              pixiv
            </Link>
            <div className="links_description">イラストを置きます</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://note.com/maakunn89">
              note
            </Link>
            <div className="links_description">比較的長めの文章はこちら</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://skeb.jp/@maakunn89">
              Skeb
            </Link>
            <div className="links_description">リクエスト受付はリンク先をご確認ください</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://youtube.com/channel/UC0iocQ3yKL_crKV40V-Tevg">
              YouTube
            </Link>
            <div className="links_description">趣味の動画がたまに上がります</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://soundcloud.com/fukino89">
              SoundCloud
            </Link>
            <div className="links_description">友人fukino89との合作 主にサムネ担当です</div>
          </div>
          <div className="links_row">
            <Link className="link" to="https://kakuyomu.jp/users/maakunn89">
              カクヨム
            </Link>
            <div className="links_description">フィクション成分の多い長文はこちらです</div>
          </div>
        </div>
        <div className="links_heading">
          いろいろ募集中
          <div className="links_row">
            <Link
              className="link"
              to="https://marshmallow-qa.com/maakunn89?t=f8cdOu&amp;utm_medium=twitter&amp;utm_source=promotion"
            >
              マシュマロ
            </Link>
            <div className="links_description">匿名での各種感想などはこちら</div>
          </div>
          <div className="links_row">
            <Link className="link" to="">
              お題箱
            </Link>
            <div className="links_description">たまに描きます 正式なリクエストは上のSKebへどうぞ</div>
          </div>
          <div className="links_row">
            <Link className="link" to="">
              ほしいものリスト
            </Link>
            <div className="links_description">気分で更新 大富豪向け</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Links
