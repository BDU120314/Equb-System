import React from 'react'
import Header from '../comopnents/landingPage/Header'
import Footer from '../comopnents/landingPage/Footer'
import { Outlet } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Header />
      <main className='mt-[70px]'>
       <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default LandingPage