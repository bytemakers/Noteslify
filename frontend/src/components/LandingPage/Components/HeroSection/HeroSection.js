import React from 'react'
import { Link } from 'react-router-dom';
import './HeroSection.css'
const HeroSection = () => {
  return (
    <section className = "hero-section">
      <div className='blue__circle blue__circle-1'></div>
      <div className='blue__circle blue__circle-2'></div>
      <div data-aos="fade-up" className='container flex'>
         <h1 style = {{padding:'0px'}}>Your Privacy Friendly, Open Source.
Alternative to EverNote.</h1>
          <h4>
            Capture your notes, files, and life’s work all in one secure place.
          </h4>
          <Link to="/Signup"><button>Get Started For Free</button></Link>
      </div>
      <div className='image flex'>
        <img style = {{width:'70%'}} src = "assets/bgimage.png" alt = "cover-page"/>
      </div>
    </section>
  )
}

export default HeroSection
