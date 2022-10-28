import React from 'react'
import './Info.css'
const Info = () => {
  return (
     <section className ="Info-section">
         <section  className = "grid container">
             <div data-aos="flip-left"  className='About note1'>
                <h2>Capture Infinitely</h2>
                <p>Save images of your important documents securely scanned.</p>
             </div>
             <div data-aos="flip-left" className='About note2'>
                <h2>Reminders</h2>
                <p>Create and assign your task with due dates and reminders.</p>
             </div>
             <div data-aos="flip-left" className='About note3'>
                <h2>Cloud Synced</h2>
                <p>Store as many notes you can safely backed up on cloud.</p>
             </div>
             <div data-aos="flip-left" className='About note4'>
                <h2>Privacy Friendly</h2>
                <p>We focus on building it open source and privacy focused. </p>
             </div>
         </section>
     </section>
  )
}

export default Info
