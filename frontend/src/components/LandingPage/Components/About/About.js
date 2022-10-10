import React from 'react'
import './About.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 6000,
      once: false

    });
  }, []);
  return (
    <section className="About-section" id="About">
      <div className="container flex about-flex">
        <div data-aos="flip-left" data-aos-delay="50"
          data-aos-duration="3000">
          <div><img src="assets/mobile.png" alt="mobileimage" asset="mobile-design" /></div>
        </div>
        <div data-aos="fade-right " data-aos-delay="50"
          data-aos-duration="3000" className='flex desc'>
          <h2>What is Noteslify?</h2>
          <p>Noteslify gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it. </p>
        </div>
      </div>

      <div className="container flex about-flex middle-section">

        <div data-aos="fade-left" data-aos-delay="100"
          data-aos-duration="3000" className='flex desc'>
          <h2>Powerful And Simple Notes</h2>
          <p>Create Backups and Share - Record Notes and Capture Pictures - Classify Notes Into Categories - Upload Unlimited</p>
        </div>
        <div data-aos="flip-right" data-aos-delay="200"
          data-aos-duration="3000">
          <div><img src="assets/mobile2.png" alt="mobileimage2" asset="mobile-design" /></div>
        </div>

      </div>
      <div className="container flex about-flex">
        <div data-aos="flip-left" data-aos-delay="200"
          data-aos-duration="3000">
          <div><img src="assets/mobile3.png" alt="mobileimage3" asset="mobile-design" /></div>
        </div>
        <div data-aos="fade-right" data-aos-delay="300"
          data-aos-duration="3000" className='flex desc'>
          <h2>Security Focused</h2>
          <p>We focus on building it open source and privacy focused. Giving users complete control over the data they own.</p>
        </div>
      </div>
    </section>
  )
}

export default About
