import React from 'react'
import Footer from '../Components/Footer/Footer'
import Info from '../Components/Info/Info'
import NavBar from '../Components/NavBar/NavBar'
import NewsLetter from '../Components/Newsletter/NewsLetter'
import PricingContent from '../Components/PricingContent/PricingContent'

const Pricing = () => {
  return (
    <>
      <NavBar/>
      <PricingContent />
      <Info/>
      <NewsLetter />
      <Footer />
    </>
  )
}

export default Pricing
