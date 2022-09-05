import React from 'react'
import './HeroSection.css'
const HeroSection = () => {
  return (
    <section className = "hero-section">
      <div className='container flex'>
         <h1 style = {{padding:'0px'}}>Your Privacy Friendly, Open Source.
Alternative to Google Keep.</h1>
          <h4> 
            Capture your notes, files, and life’s work all in one secure place.
          </h4>
          <button>Get Started For Free</button>
      </div>
      <div className='image flex'>
        <img style = {{width:'70%'}} src = "assets/bgimage.png"alt = "cover-page"/>
        <img src = "assets/vector.png" alt = "design"/>
      </div>
    </section>
  )
}

export default HeroSection
