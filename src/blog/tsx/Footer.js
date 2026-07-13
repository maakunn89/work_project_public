import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import '../css/Footer.css';
const Footer = () => {
    const returnTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (_jsxs("div", { className: "footer_content", children: [_jsx("div", { className: 'footer_credit', children: "\u00A9 2024 maakunn89. All rights reserved. \u81EA\u4F5C\u306E\u30B5\u30A4\u30C8\u306A\u306E\u3067\u7D30\u304B\u3044\u7C97\u306F\u5927\u76EE\u306B\u898B\u3066\u304F\u3060\u3055\u3044\u3002" }), _jsxs("div", { className: "footer_links", children: [_jsx(Link, { className: 'footer_link', to: "javascript:history.back();", children: "BACK" }), _jsx(Link, { className: 'footer_link', to: "#", onClick: returnTop, children: "PAGE TOP" })] })] }));
};
export default Footer;
