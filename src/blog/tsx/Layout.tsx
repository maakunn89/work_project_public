import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import '../css/Layout.css'

const Layout = () => {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&family=M+PLUS+1p&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@200..1000&display=swap" rel="stylesheet" />
      </head>
      <meta charSet="utf-8" />
      <Header></Header>
      <Outlet></Outlet>
    </>
  )
}

export default Layout
