import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className = "About-section" id = "About">
        <div className="container flex about-flex">
          <div>
            <div><img src="assets/mobile.png" alt="mobileimage" asset = "mobile-design"/></div>
        </div>
        <div className='flex desc'>
          <h2>What is Noteslify?</h2>
          <p>Noteslify gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it. </p>
        </div>
        </div>
        
        <div className="container flex about-flex middle-section">
        
        <div className='flex desc'>
          <h2>What is Noteslify?</h2>
          <p>Noteslify gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it. </p>
        </div>
          <div>
            <div><img src="assets/mobile.png" alt="mobileimage" asset = "mobile-design"/></div>
        </div>
        
        </div>
        <div className="container flex about-flex">
          <div>
            <div><img src="assets/mobile.png" alt="mobileimage" asset = "mobile-design"/></div>
        </div>
        <div className='flex desc'>
          <h2>What is Noteslify?</h2>
          <p>Noteslify gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it. </p>
        </div>
        </div>
    </section>
  )
}

export default About
