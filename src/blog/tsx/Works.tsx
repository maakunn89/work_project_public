import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import dust from '../img/dust thumbnail.png'
import tragedy from '../img/tragedy.png'
import metrocean from '../img/metrocean.png'
import ImageModal from '../tsx/ImageModal'
import dracoSega from '../img/draco_sega.png'
import hyperbrossum from '../img/hyperbrossum.png'
import tsuchinoko from '../img/tsuchinoko.png'
import pine from '../img/pine.png'
import yamadaryo from '../img/yamadaryo.png'
import iizakamahiro from '../img/iizakamahiro.png'
import hujitakanasu from '../img/hujitakanasu.png'
import newkiskil from '../img/newkiskil.png'
import ahuoni from '../img/ahuoni.png'
import nicenature from '../img/nicenature.png'
import bridget from '../img/bridgetrough.png'
import ikuhosidorako from '../img/ikuhosidorako.png'
import siti from '../img/siti.png'
import oji from '../img/oji.png'
import osirisu from '../img/osirisu.jpg'
import yukiko1 from '../img/yukiko1.png'
import yukiko2 from '../img/yukiko2.png'
import yukiko1_hover from '../img/wa-i.png'
import yukiko2_hover from '../img/abareru.png'
import babibabi from '../img/babibabi.png'
import buttercup from '../img/buttercup.png'
import nodoka from '../img/nodoka.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import '../css/Works.css'
import { Helmet } from 'react-helmet-async'

const Works = () => {
  const componentName = 'Works'
  const [openMovie, setOpenMovie] = useState(false)
  const [openIllust, setOpenIllust] = useState(false)
  const [openOthers, setOpenOthers] = useState(false)
  const [heightChanger, setHeightChanger] = useState(false)

  const changeOpenMovie = async () => {
    setOpenMovie(!openMovie)
    if (!openMovie) {
      await new Promise((resolve) => setTimeout(resolve, 150))
    }
    if (openIllust && !openMovie) {
      setHeightChanger(!openMovie)
    } else if (!openIllust) {
      setHeightChanger(!openMovie)
    }
  }
  const changeOpenIllust = async () => {
    setOpenIllust(!openIllust)
    if (!openMovie) {
      await new Promise((resolve) => setTimeout(resolve, 150))
    } else if (openIllust) {
      await new Promise((resolve) => setTimeout(resolve, 150))
    }
    if (openIllust && !openMovie) {
      setHeightChanger(!openIllust)
    } else if (!openIllust && !openMovie) {
      setHeightChanger(!openIllust)
    }
  }
  const changeOpenOthers = () => {
    setOpenOthers(!openOthers)
  }

  return (
    <div className="content_wrapper_works" style={heightChanger ? {} : { height: '100%' }}>
      <div className="works_img">
        <Helmet>
          <title>Principal Dawn | {componentName}</title>
        </Helmet>
        <div className="works_bg">
          <div className="page_title">
            Works
            <p className="title_description">作品など</p>
          </div>
          <div className="contents text">
            <div className="works_genre">
              <div className="works_heading">
                Movie
                <div className="works_description">動画</div>
                {openMovie ? (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenMovie} />
                ) : (
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenMovie} />
                )}
              </div>
              <div className={openMovie ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="work_single">
                    <div className="work_title">ボカロ曲「Dust / Tugi feat.初音ミク」MV作成</div>
                    <Link target="_brank" className="link work_link" to="https://www.nicovideo.jp/watch/sm42572636">
                      ニコニコ動画
                    </Link>
                    <Link target="_brank" className="link work_link" to="https://www.youtube.com/watch?v=waCgSPZmiDQ">
                      YouTube
                    </Link>
                  </div>
                  {ImageModal(dust, 'dust_thumbnail')}
                  <div className="work_single">
                    <div className="work_title">インスト曲「MetrOceaN / ふきのとう」ジャケット・MV作成</div>
                    <Link
                      target="_brank"
                      className="link work_link"
                      to="https://soundcloud.com/fukino89/metrocean?si=b030d272acd54199bccf5287e16acc4f&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    >
                      SoundCloud
                    </Link>
                    <Link target="_brank" className="link work_link" to="https://www.youtube.com/watch?v=j9rppY9_ETI">
                      YouTube
                    </Link>
                  </div>
                  {ImageModal(metrocean, 'metrocean_thumbnail')}
                  <div className="work_single">
                    <div className="work_title">インスト曲「Tragedy / ふきのとう」ジャケット・MV作成</div>
                    <Link
                      target="_brank"
                      className="link work_link"
                      to="https://soundcloud.com/fukino89/tragedy?si=e7d5ced08d6f412e80d7193a3ee55eea&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    >
                      SoundCloud
                    </Link>
                    <Link target="_brank" className="link work_link" to="https://www.youtube.com/watch?v=IbhddU5JSyM">
                      YouTube
                    </Link>
                  </div>
                  {ImageModal(tragedy, 'tragedy_thumbnail')}
                </div>
              </div>
            </div>
            <div className="works_genre">
              <div className="works_heading">
                Illust
                <div className="works_description">お絵描き</div>
                {openIllust ? (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenIllust} />
                ) : (
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenIllust} />
                )}
              </div>
              <div className={openIllust ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="works_row">
                    <div className="work_single">
                      <div className="work_caption">
                        ここにない作品は
                        <Link target="_brank" className="link" to="https://www.pixiv.net/users/10358070">
                          pixiv
                        </Link>
                        などをご覧ください。
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(dracoSega, 'ドラコケンタウロス SEGAのサイトに載った')}
                      <div className="work_caption">
                        ドラコケンタウロス
                        <br />
                        セガのサイトに載った
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(hyperbrossum, 'ハイパーブロッサム 思い出のキャラ')}
                      <div className="work_caption">
                        ハイパーブロッサム
                        <br />
                        思い出のキャラ
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(tsuchinoko, 'ツチノコ 会ってみたい')}
                      <div className="work_caption">
                        ツチノコ
                        <br />
                        会ってみたい
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(babibabi, 'オリジナル バ美肉体')}
                      <div className="work_caption">
                        オリジナル
                        <br />
                        バ美肉体
                        <br />
                        デザイン:
                        <Link target="_brank" className="link" to="https://x.com/sakana299">
                          さかなさん
                        </Link>
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(yamadaryo, '山田リョウ リクエストから')}
                      <div className="work_caption">
                        山田リョウ
                        <br />
                        リクエストから
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(hujitakanasu, 'ジャガー いいポーズ')}
                      <div className="work_caption">
                        ジャガー
                        <br />
                        いいポーズ
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(pine, 'パイン(ボンバーガール) リクエストから')}
                      <div className="work_caption">
                        パイン
                        <br />
                        リクエストから
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(newkiskil, 'Evil★Twinキスキル 新規絵が良い')}
                      <div className="work_caption">
                        Evil★Twinキスキル
                        <br />
                        新規絵が良い
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(iizakamahiro, '飯坂真尋 リクエストから')}
                      <div className="work_caption">
                        飯坂真尋
                        <br />
                        リクエストから
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(nicenature, 'ナイスネイチャ 日常っぽく')}
                      <div className="work_caption">
                        ナイスネイチャ
                        <br />
                        日常っぽく
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(bridget, 'ブリジット GGの持ちキャラ')}
                      <div className="work_caption">
                        ブリジット
                        <br />
                        GGの持ちキャラ
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(ahuoni, 'アフリカオニネズミ リクエストから')}
                      <div className="work_caption">
                        アフリカオニネズミ
                        <br />
                        リクエストから
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(ikuhosidorako, '幾星学園のドラコ なお未所持')}
                      <div className="work_caption">
                        幾星学園のドラコ
                        <br />
                        なお未所持
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(buttercup, 'バターカップ パワパフZ LOVE')}
                      <div className="work_caption">
                        バターカップ
                        <br />
                        パワパフZ LOVE
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(nodoka, '宮崎のどか ネギまは原作派')}
                      <div className="work_caption">
                        宮崎のどか
                        <br />
                        ネギまは原作派
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(siti, 'オリジナル 死地(鉛筆)')}
                      <div className="work_caption">
                        オリジナル
                        <br />
                        死地(鉛筆)
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(oji, '模写 王子駅前')}
                      <div className="work_caption">
                        模写
                        <br />
                        王子駅前
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(osirisu, 'エーテルゲイザー オシリス リクエストから')}
                      <div className="work_caption">
                        エーテルゲイザー
                        <br />
                        オシリス リクエストから
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="works_genre">
              <div className="works_heading">
                Others
                <div className="works_description">ほかにも色々</div>
                {openOthers ? (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenOthers} />
                ) : (
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenOthers} />
                )}
              </div>
              <div className={openOthers ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="work_single">
                    <div className="work_title">LINEスタンプ 2種　発売中</div>
                    <div className="works_description">我が家のゆきこスタンプ 1・2</div>
                    <div className="works_row">
                      <Link target="_brank" to="https://store.line.me/stickershop/product/22412308/ja">
                        <div className="switch_image">
                          <img src={yukiko1} className="yukiko1" alt="yukiko1_thumbnail" />
                          <img src={yukiko1_hover} className="yukiko1" alt="yukiko1_hover" />
                        </div>
                      </Link>
                      <Link target="_brank" to="https://store.line.me/stickershop/product/25235410/ja">
                        <div className="switch_image">
                          <img src={yukiko2} className="yukiko2" alt="yukiko2_thumbnail" />
                          <img src={yukiko2_hover} className="yukiko2" alt="yukiko2_hover" />
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
