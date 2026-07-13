import React from 'react'
import { Link } from 'react-router-dom'
import Icon from '../img/icon.png'
import OldIcon1 from '../img/icon_old1.png'
import OldIcon2 from '../img/icon_old2.jpg'
import OldIcon3 from '../img/icon_old3.jpg'
import '../css/About.css'
import { Helmet } from 'react-helmet-async'

const About = () => {
  return (
    <div className="content_wrapper_about">
      <div className="about_img">
        <Helmet>
          <title>Principal Dawn | About</title>
        </Helmet>
        <div className="about_bg">
          <div className="page_title">
            About
            <p className="title_description">このサイトと自分について</p>
          </div>
          <div className="contents text">
            <img className="icon" src={Icon} alt="著者近影" />
            <div className="icon_description">△ 著者近影</div>
            <div className="about_description">
              まーくん / @maakunn89のホームページです。
              <br />
              89は誕生日が8/9であることに由来。
              <br />
              日本語・英語がちょっと分かります（English OK）。
              <br />
              <br />
              普段はほどほどに働きながら、
              <br />
              たまに絵を描いたり映像や文章を作ったりしています。
              <br />
              普段は主に
              <Link target="_blank" rel="noopener noreferrer" className="link" to="https://twitter.com/maakunn89">
                Twitter (X)
              </Link>
              にいますが、こちらも時々更新します。
              <br />
              <br />
              プログラミングも多少できます。
              <br />
              Python・TypeScript・JavaScript・PHP・HTML/CSS
              <br/>
              ほんの少しC・C#・OCamlなど。
              <br />
              <br />
            </div>
            <div className="icons_list">
              <img className="icon_old" src={OldIcon1} alt="その他のアイコン1" />
              <img className="icon_old" src={OldIcon2} alt="その他のアイコン2" />
              <img className="icon_old" src={OldIcon3} alt="その他のアイコン3" />
            </div>
            <div className="icon_description">△ その他のアイコンなど</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
