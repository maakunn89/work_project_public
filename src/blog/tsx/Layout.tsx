import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../css/Layout.css'

const Layout = () => {
  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
