import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Info from '../components/Info'
import Footer from '../components/Footer'
import About from '../components/About'
import Description from '../components/Description'

const Home = () => {
  return (
     <div className= ' tw-bg-black tw-bg-cover'>  
     <Navbar/>
     <HeroSection/>
     <Info/>
     <About/>
     <Description/>
     <Footer/>
     </div>
  )
}

export default Home
