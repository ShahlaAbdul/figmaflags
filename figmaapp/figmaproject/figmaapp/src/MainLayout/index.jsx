import React from 'react'
import Navbar from '../Layout/Navbar'
import Footer from '../Layout/Footer'
import { Outlet } from 'react-router-dom'


function MainLayout() {
  return (
    <div>
        <Navbar></Navbar>
       <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default MainLayout