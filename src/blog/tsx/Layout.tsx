import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import '../css/Layout.css'

const Layout = () => {
  return (
    <>
      <meta charSet="utf-8" />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default Layout
