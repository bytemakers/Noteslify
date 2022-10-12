import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import HeroSection from '../Components/HeroSection/HeroSection'
import Info from '../Components/Info/Info'
import Footer from '../Components/Footer/Footer'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import About from '../Components/About/About'
import '../LandingPage.css'

const Home = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <About />
      <Info />
      {/* <NewsLetter/> */}
      <Footer />
    </>
  )
}

export default Home
