import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import '../css/Works.css';
import { Helmet } from 'react-helmet-async';
const Notfound = () => {
    const componentName = 'Not found';
    return (_jsxs("div", { className: "content_wrapper", children: [_jsx(Helmet, { children: _jsxs("title", { children: ["Principal Dawn | ", componentName] }) }), _jsxs("div", { className: "page_title", children: ["Not found", _jsx("p", { className: "title_description", children: "\u30DA\u30FC\u30B8\u304C\u898B\u3064\u304B\u308A\u307E\u305B\u3093\u3067\u3057\u305F" })] }), _jsxs("div", { className: "contents text", children: [_jsx("div", { children: "\u304A\u624B\u6570\u3067\u3059\u304C\u3001URL\u3092\u304A\u78BA\u304B\u3081\u306E\u4E0A\u518D\u5EA6\u30A2\u30AF\u30BB\u30B9\u3059\u308B\u304B\u3001" }), _jsxs("div", { children: [_jsx(Link, { to: "/", className: "link", children: "\u30C8\u30C3\u30D7\u3078" }), "\u304A\u623B\u308A\u304F\u3060\u3055\u3044\u3002"] })] })] }));
};
export default Notfound;
