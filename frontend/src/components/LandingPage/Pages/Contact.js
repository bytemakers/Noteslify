import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Info from'../Components/Info/Info'
import Footer from '../Components/Footer/Footer'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import About from '../Components/About/About'
import '../LandingPage.css'


const Contact = () => {
  return (
    <>
        <NavBar/>
        <About/>
        <Info/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Contact
