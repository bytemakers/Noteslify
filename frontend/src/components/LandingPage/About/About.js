import React from 'react'
import './About.css'
const About = () => {
  return (
    <section className = "About-section">
        <div className="container flex about-flex">
          <div>
            <div><img src="assets/mobile.png" asset = "mobile-design"/></div>
        </div>
        <div className='flex desc'>
          <h2>What is Noteslify?</h2>
          <p>Lorem ipsum dolor, sit amet consectetur 
            adipisicing elit. Ex unde officiis ratione? Magnam autem enim voluptatibus consectetur quidem ratione </p>
        </div>
        </div>
    </section>
  )
}

export default About
