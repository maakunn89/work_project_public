import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import '../css/Header.css';
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
        }
        else if (count < 100) {
            setSecret(true);
        }
        else {
            setCount(0);
        }
    }, [count]);
    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };
    const closeMenu = () => {
        setMenuOpen(false);
    };
    return (_jsxs("div", { className: "header_content", children: [_jsxs("div", { className: "header_title", children: [_jsx("span", { className: secret ? (count % 2 == 0 ? 'phead rotate' : 'phead_blight rotate') : (count % 2 == 0 ? 'phead' : 'phead_blight'), onClick: countUp, children: "P" }), "rincipal Dawn"] }), _jsx("button", { type: "button", className: "header_menu_button", onClick: toggleMenu, "aria-label": menuOpen ? 'メニューを閉じる' : 'メニューを開く', "aria-expanded": menuOpen, children: menuOpen ? _jsx(CloseIcon, {}) : _jsx(MenuIcon, {}) }), _jsxs("nav", { className: menuOpen ? 'header_links open' : 'header_links', children: [_jsx(Link, { className: "header_link", to: "/", onClick: closeMenu, children: "Top" }), _jsx(Link, { className: "header_link", to: "/about", onClick: closeMenu, children: "About" }), _jsx(Link, { className: "header_link", to: "/works", onClick: closeMenu, children: "Works" }), _jsx(Link, { className: "header_link", to: "/links", onClick: closeMenu, children: "Links" }), secret ? (_jsx(Link, { className: "header_link", to: "/secret", onClick: closeMenu, children: "Secret" })) : (_jsx(_Fragment, {})), _jsx(Link, { className: "header_link", to: "/contact", onClick: closeMenu, children: "Contact" })] }), menuOpen && _jsx("div", { className: "header_menu_overlay", onClick: closeMenu })] }));
};
export default Header;
