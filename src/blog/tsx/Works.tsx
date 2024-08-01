import React from 'react'
import '../css/Works.css'
import { Helmet } from 'react-helmet-async'

const Works = () => {
  const componentName = 'Works'
  return (
    <div className="content_wrapper">
      <div className='works_img'>
        <Helmet>
          <title>Principal Dawn | {componentName}</title>
        </Helmet>
        <div className='works_bg'>
          <div className="page_title">
            Works
            <p className="title_description">作品など</p>
          </div>
          <div className="contents text">
            <div className='works_genre'>
              <div className='works_heading'>映像</div>
              <div className='works_list'>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
              </div>
            </div>
            <div className='works_genre'>
              <div className='works_heading'>イラスト</div>
              <div className='works_list'>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
              </div>
            </div>
            <div className='works_genre'>
              <div className='works_heading'>その他</div>
              <div className='works_list'>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
                <div className='work_single'></div>
              </div>
            </div>
            <div>絵を描いたりプログラミングをしたりしながら暮らしています。</div>
            <div>普段は主にTwitterにいますが、こちらも時々更新します。</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Works
