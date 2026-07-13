import { useState } from 'react'
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
import livetwin from '../img/livetwin.png'
import staygold from '../img/staygold.png'
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
import business from '../img/business.png'
import business_hover from '../img/business_hover.png'
import babi_yusai from '../img/babi_yusai_grasses.png'
import rainy from '../img/rainy_colored.png'
import tanka from '../img/tanka.png'
import gohan from '../img/gohangasusumu.png'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import '../css/Works.css'
import { Helmet } from 'react-helmet-async'

const Works = () => {
  const [openMovie, setOpenMovie] = useState(false)
  const [openIllust, setOpenIllust] = useState(false)
  const [openOthers, setOpenOthers] = useState(false)
  const [heightChanger, setHeightChanger] = useState(true)

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
    if (!openIllust) {
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
          <title>Principal Dawn | Works</title>
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
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenMovie} />
                ) : (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenMovie} />
                )}
              </div>
              <div className={openMovie ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="work_single">
                    <div className="work_title">ボカロ曲「Dust / Tugi feat.初音ミク」MV作成</div>
                    <Link target="_blank" rel="noopener noreferrer" className="link work_link" to="https://www.nicovideo.jp/watch/sm42572636">
                      ニコニコ動画
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" className="link work_link" to="https://www.youtube.com/watch?v=waCgSPZmiDQ">
                      YouTube
                    </Link>
                  </div>
                  {ImageModal(dust, 'dust_thumbnail')}
                  <div className="work_single">
                    <div className="work_title">ふきのとう氏のサムネイル作成および一部楽曲共同制作</div>
                    <Link
                      target="_blank" rel="noopener noreferrer"
                      className="link work_link"
                      to="https://www.youtube.com/@fukino89"
                    >
                      SoundCloud
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" className="link work_link" to="https://www.youtube.com/@fukino89">
                      YouTube
                    </Link>
                  </div>
                  {ImageModal(tragedy, 'tragedy_thumbnail')}
                  {ImageModal(metrocean, 'metrocean_thumbnail')}
                  <div className="work_single">
                    <div className="work_title">その他 趣味の動画など</div>
                    <Link target="_blank" rel="noopener noreferrer" className="link work_link" to="https://www.nicovideo.jp/user/144372202">
                      ニコニコ動画
                    </Link>
                    <Link target="_blank" rel="noopener noreferrer" className="link work_link" to="https://www.youtube.com/@maakunn89/featured">
                      YouTube
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="works_genre">
              <div className="works_heading">
                Illust
                <div className="works_description">お絵描き</div>
                {openIllust ? (
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenIllust} />
                ) : (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenIllust} />
                )}
              </div>
              <div className={openIllust ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="works_row">
                    <div className="work_single">
                      <div className="work_caption">
                        サムネイルをクリックすると拡大できます。
                      </div>
                      <div className="work_caption">
                        ここにない作品は<a className="link" href="https://www.pixiv.net/users/10358070" target="_blank" rel="noopener noreferrer">pixiv</a>などをご覧ください。
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
                      {ImageModal(pine, 'パイン(ボンバーガール) リクエストから')}
                      <div className="work_caption">
                        パイン
                        <br />
                        リクエストから
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
                      {ImageModal(iizakamahiro, '飯坂真尋 リクエストから')}
                      <div className="work_caption">
                        飯坂真尋
                        <br />
                        リクエストから
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(livetwin, 'Live☆Twin キスキル & Live☆Twin リィラ ノートのサムネイル用')}
                      <div className="work_caption">
                        Live☆Twin キスキル
                        <br />
                        Live☆Twin リィラ
                        <br />
                        <br />
                        noteのサムネイル用
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(staygold, 'ナイスネイチャ 日常っぽく')}
                      <div className="work_caption">
                        ステイゴールド
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
                      {ImageModal(ikuhosidorako, '幾星学園のドラコ なお未所持')}
                      <div className="work_caption">
                        幾星学園のドラコ
                        <br />
                        なお未所持
                      </div>
                    </div>
                  </div>
                  <div className="works_row">
                    <div className="work_single">
                      {ImageModal(babi_yusai, 'オリジナル バ美肉体 デザイン担当はさかなさん')}
                      <div className="work_caption">
                        オリジナル
                        <br/>
                        バ美肉体
                        <br/>
                        デザイン:<a className="link" href="https://x.com/sakana299" target="_blank" rel="noopener noreferrer">さかなさん</a>
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(rainy, 'オリジナル レイニー')}
                      <div className="work_caption">
                        オリジナル
                        <br />
                        レイニー
                      </div>
                    </div>
                    <div className="work_single">
                      {ImageModal(tanka, 'オリジナル 短歌集の表紙')}
                      <div className="work_caption">
                        オリジナル
                        <br />
                        短歌集の表紙
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
                  <KeyboardArrowUpIcon className="arrow_icon" onClick={changeOpenOthers} />
                ) : (
                  <KeyboardArrowDownIcon className="arrow_icon" onClick={changeOpenOthers} />
                )}
              </div>
              <div className={openOthers ? 'works_list open' : 'works_list'}>
                <div className="works_list_inner">
                  <div className="work_single">
                    <div className="work_title">LINEスタンプ 3種　発売中</div>
                    <div className="works_description">我が家のゆきこスタンプ 1・2</div>
                    <div className="works_row">
                      <Link target="_blank" rel="noopener noreferrer" to="https://store.line.me/stickershop/product/22412308/ja">
                        <div className="switch_image">
                          <img src={yukiko1} className="yukiko1" alt="yukiko1_thumbnail" />
                          <img src={yukiko1_hover} className="yukiko1" alt="yukiko1_hover" />
                        </div>
                      </Link>
                      <Link target="_blank" rel="noopener noreferrer" to="https://store.line.me/stickershop/product/25235410/ja">
                        <div className="switch_image">
                          <img src={yukiko2} className="yukiko2" alt="yukiko2_thumbnail" />
                          <img src={yukiko2_hover} className="yukiko2" alt="yukiko2_hover" />
                        </div>
                      </Link>
                    </div>
                    <div className="works_description">ビジネスで使える！ 文字でスタンプ</div>
                    <div className="works_row">
                      <Link target="_blank" rel="noopener noreferrer" to="https://store.line.me/stickershop/product/32732910/ja">
                        <div className="switch_image">
                          <img src={business} className="business" alt="business_thumbnail" />
                          <img src={business_hover} className="business" alt="business_hover" />
                        </div>
                      </Link>
                    </div>
                    <div className="work_title">同人誌　発売中</div>
                    <div className="works_description">
                      私にはいつも言葉は薄すぎる　だから重ねて本にでもする
                      <br/>
                      maakunn89 短歌集
                    </div>
                    <div className="works_description">(※メロンブックスの通販ページに飛びます、現在は電子版のみ)</div>
                    <div className="works_row">
                      <a href="https://www.melonbooks.co.jp/detail/detail.php?product_id=3342269" target="_blank" rel="noopener noreferrer">
                        <img src={tanka} className="tanka1" alt="tanka1_thumbnail"/>
                      </a>
                    </div>
                    <div className="work_title">SUZURIにてオリジナルグッズ発売中</div>
                    <div className="works_description">ごはんがすすむシリーズ Tシャツなど取扱中</div>
                    <div className="works_row">
                      <a href="https://suzuri.jp/maakunn89" target="_blank" rel="noopener noreferrer">
                        <img src={gohan} className="gohan" alt="gohan_thumbnail"/>
                      </a>
                    </div>
                    <div className="work_title">その他非公開実績あり</div>
                    <div className="works_description">
                      商業向け広告用バナーの作成・X広告運用<br/>
                      GASやpythonによる各種業務効率化ツール<br/>
                      フロントエンドエンジニアとして複数企業へ参画経験<br/>
                      ホームビデオの作成　etc……
                      <br/>
                      <br/>簡易的な技術相談なども可能です。
                      <br/>
                      <Link target="_blank" rel="noopener noreferrer" className='link' to='/links'>各種SNS</Link>または
                      <Link target="_blank" rel="noopener noreferrer" className='link' to='/contact'>連絡フォーム</Link>からお気軽にどうぞ！
                      <br/>
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
