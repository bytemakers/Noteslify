import React from 'react'
import Contact_form from '../Components/Contact_form/Contact_form'
import Footer from '../Components/Footer/Footer'
import Info from '../Components/Info/Info'
import NavBar from '../Components/NavBar/NavBar'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import '../LandingPage.css'


const Contact = () => {
  return (
    <>
        <NavBar/>
        <Contact_form/>
        <Info/>
        <NewsLetter/>
        <Footer/>
    </>
  )
}

export default Contact
