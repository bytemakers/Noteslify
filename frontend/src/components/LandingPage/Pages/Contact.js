import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import Info from'../Components/Info/Info'
import Footer from '../Components/Footer/Footer'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import About from '../Components/About/About'
import Contact_form from '../Components/Contact_form/Contact_form'
import '../LandingPage.css'


const Contact = () => {
  return (
    <>
        <NavBar/>
        <Contact_form/>
        <About/>
        <Info/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Contact
