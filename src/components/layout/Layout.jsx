import React from 'react'
import Navbar from '../navbar/Navbar.jsx'
import Snavbar from '../navbar/Snavbar.jsx'
import Home from '../home/Home.jsx'
import Footer from '../footer/Footer.jsx'
import BookTitle from '../freebook/BookTitle.jsx'
import FBook from '../ubaid/FBook.jsx'
import { Outlet, useLocation } from 'react-router-dom'

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {/* Conditionally render Snavbar, Home, BookTitle, and FBook only on the homepage */}
      {location.pathname === '/' && (
        <>
          <Snavbar />
          <Home />
          <BookTitle />
          <FBook />
        </>
      )}
      {/* Outlet for nested routes like /course */}
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Layout;
