import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Footer.css'

const Footer = () => {
  const returnTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className="footer_content">
      <div className="footer_credit">
        © 2024 maakunn89. All rights reserved. 　　自作のサイトなので細かい粗は大目に見てください。
      </div>
      <div className="footer_links">
        <Link className="footer_link" to="#" onClick={() => window.history.back()}>
          BACK
        </Link>
        <Link className="footer_link" to="#" onClick={returnTop}>
          PAGE TOP
        </Link>
      </div>
    </div>
  )
}

export default Footer
