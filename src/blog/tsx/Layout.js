import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../css/Layout.css';
const Layout = () => {
    return (_jsxs(_Fragment, { children: [_jsx("meta", { charSet: "utf-8" }), _jsx(Header, {}), _jsx(Outlet, {}), _jsx(Footer, {})] }));
};
export default Layout;
