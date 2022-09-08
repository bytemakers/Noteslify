import React from 'react'
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
            <p>Capture your notes, files, and life’s work all in one secure place.</p>
            <div className='links'>
              <ul className='flex'>
                <li><i class="uil uil-github"></i></li>
                <li><i class="uil uil-linkedin"></i></li>
                <li><i class="uil uil-twitter"></i></li>
              </ul>
            </div>
         </div>
         <div>
             <ul className='flex'>
               <li>Home</li>
               <li>Features</li>
               <li>Pricing</li>
               <li>Contact</li>
               <li>Dashboard</li>
               <li>Get started</li>
           </ul>
         </div>
         </section>
    </footer>
    </section>
  )
}

export default Footer
