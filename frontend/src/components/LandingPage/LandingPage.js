import React from 'react'
import About from './components/About'
import Info from './components/Info'
import Navbar from './components/Navbar'
import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className="bg-white font-['Poppins'] font-[300] overflow-y-auto overflow-x-hidden">
        <Navbar/>
        <About/>
        <Info/>
    </div>
  )
}

export default LandingPage