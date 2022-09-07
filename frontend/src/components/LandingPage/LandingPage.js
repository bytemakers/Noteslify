import React from 'react'
import NavBar from './NavBar/NavBar'
import HeroSection from './HeroSection/HeroSection'
import Info from'./Info/Info'
import Footer from './Footer/Footer'
import NewsLetter from './Newsletter/NewsLetter'
import About from './About/About'

import './LandingPage.css'

const LandingPage = () => {
  return (
    <div className = "landApp">
        <NavBar/>
        <HeroSection/>
        <About/>
        <Info/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default LandingPage
