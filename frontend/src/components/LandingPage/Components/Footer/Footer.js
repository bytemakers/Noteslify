import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
  return (
<section className='bottom-section' >
  {/* <img src= "assets/vector-bottom.png" alt = "design" /> */}
    <footer className='footer'>
      <section className='flex'>
         <div>
            <h4>Noteslify</h4>
            <h5>By DVS Tech Labs</h5>
            <p>Your Privacy Friendly, Open Source. Alternative to Google Keep.</p>
            <div className='links'>
              <ul className='flex'>
                <a href="https://github.com/devarshishimpi/Noteslify"><li><i className="fa-brands fa-github"></i></li></a>
                <li><i className="fa-brands fa-linkedin"></i></li>
                <li><i className="fa-brands fa-twitter"></i></li>
              </ul>
            </div>
         </div>
         <div>
             <ul className='flex'>
              <Link to="/"><li style={{color:'white'}}>Home</li></Link>
              <li style={{color:'white'}}>Features</li>
              <li style={{color:'white'}}>Pricing</li>
              <li style={{color:'white'}}>Contact</li>
              <a href="https://github.com/devarshishimpi/Noteslify"><li style={{color:'white'}}>Github</li></a>
              <Link to="/Notes"><li style={{color:'white'}}>Dashboard</li></Link>
              <Link to="/Signup"><li style={{color:'white'}}>Get Started</li></Link>
           </ul>
         </div>
         </section>
    </footer>
    </section>
  )
}

export default Footer
