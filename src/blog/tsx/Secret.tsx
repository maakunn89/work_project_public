import React from 'react'
import '../css/About.css'
import { Helmet } from 'react-helmet-async'

const Secret = () => {
    const componentName = 'Secret'
    return (
        <div className="content_wrapper">
            <Helmet>
                <title>Principal Dawn | {componentName}</title>
            </Helmet>
            <div className="page_title">
                Secret
                <p className="title_description">みんなにはないしょだよ</p>
            </div>
            <div className="contents text">
                <div>何を入れるかは未定です　とりあえず見つけた君はすごい</div>
            </div>
        </div>
    )
}

export default Secret
