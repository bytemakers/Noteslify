import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Info from '../components/Info'
import Footer from '../components/Footer'
import About from '../components/About'
import Description from '../components/Description'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
     <div className= ' tw-bg-black tw-bg-cover'>  
     <Navbar/>
     <HeroSection/>
     <Info/>
     <About/>
     <Description/>
     <NewsLetter/>
     <Footer/>
     </div>
  )
}

export default Home
