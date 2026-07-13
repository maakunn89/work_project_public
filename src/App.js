import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Top from './blog/tsx/Top';
import About from './blog/tsx/About';
import Works from './blog/tsx/Works';
import Links from './blog/tsx/Links';
import Secret from './blog/tsx/Secret';
import Contact from './blog/tsx/Contact';
import Layout from './blog/tsx/Layout';
import Notfound from './blog/tsx/Notfound';
import './App.css';
function App() {
    return (_jsx(_Fragment, { children: _jsx(Router, { children: _jsx(Routes, { children: _jsxs(Route, { path: "/", element: _jsx(Layout, {}), children: [_jsx(Route, { index: true, element: _jsx(Top, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/works", element: _jsx(Works, {}) }), _jsx(Route, { path: "/links", element: _jsx(Links, {}) }), _jsx(Route, { path: "/secret", element: _jsx(Secret, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "*", element: _jsx(Notfound, {}) })] }) }) }) }));
}
export default App;
