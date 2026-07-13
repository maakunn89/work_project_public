import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import '../css/Header.css'

const Header = () => {
  const [count, setCount] = useState(0);
  const [secret, setSecret] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const countUp = () => {
    let newCount = count + 1;
    setCount(newCount);
  };
  useEffect(() => {
    if (count < 89) {
      setSecret(false);
    } else if (count < 100) {
      setSecret(true);
    } else {
      setCount(0);
    }
  }, [count]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="header_content">
      <div className="header_title">
        <span
          className={secret ? (count % 2 == 0 ? 'phead rotate' : 'phead_blight rotate') : (count % 2 == 0 ? 'phead' : 'phead_blight')}
          onClick={countUp}
        >
          P
        </span>
        rincipal Dawn
      </div>

      <button
        type="button"
        className="header_menu_button"
        onClick={toggleMenu}
        aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      <nav className={menuOpen ? 'header_links open' : 'header_links'}>
        <Link className="header_link" to="/" onClick={closeMenu}>
          Top
        </Link>
        <Link className="header_link" to="/about" onClick={closeMenu}>
          About
        </Link>
        <Link className="header_link" to="/works" onClick={closeMenu}>
          Works
        </Link>
        <Link className="header_link" to="/links" onClick={closeMenu}>
          Links
        </Link>
        {secret ? (
          <Link className="header_link" to="/secret" onClick={closeMenu}>
            Secret
          </Link>
        ) : (
          <></>
        )}
        <Link className="header_link" to="/contact" onClick={closeMenu}>
          Contact
        </Link>
      </nav>

      {menuOpen && <div className="header_menu_overlay" onClick={closeMenu}></div>}
    </div>
  )
}

export default Header