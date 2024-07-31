import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Header.css'

const Header = () => {
  const [count, setCount] = useState(0);
  const [secret, setSecret] = useState(false);
  const countUp = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  useEffect(() => {
    console.log(count);
    if (count < 5) {
      setSecret(false);
    } else if (count < 10) {
      setSecret(true);
    } else {
      setCount(0);
    }
  }, [count]);
  return (
    <div className="header_content">
      <div className="header_title" onClick={countUp}><span className='phead'>P</span>rincipal Dawn</div>
      <div className="header_links">
        <Link className="header_link" to="/">
          Top
        </Link>
        <Link className="header_link" to="/about">
          About
        </Link>
        <Link className="header_link" to="/works">
          Works
        </Link>
        <Link className="header_link" to="/links">
          Links
        </Link>
        {secret ?
          <Link className="header_link" to="/secret">
            Secret
          </Link>
          : <></>}
        <Link className="header_link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Header
