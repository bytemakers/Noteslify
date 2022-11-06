import React from 'react'

const About = () => {
  return (
        <section className ="tw-flex tw-justify-between tw-items-center tw-gap-2 tw-min-h-[50vh]">
             <div data-aos="flip-left"  className='tw-w-[25%] tw-border tw-bg-transparent hover:tw-bg-white hover:tw-text-blue-500 tw-p-9 tw-mx-10 tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-125'>
                <h2 className='tw-font-extrabold tw-text-lg tw-mb-3'>Capture Infinitely</h2>
                <p className='text-md'>Save images of your important documents securely scanned.</p>
             </div>
             <div data-aos="flip-left" className='tw-w-[25%] tw-border tw-bg-transparent hover:tw-bg-white hover:tw-text-blue-500 tw-p-9 tw-mx-10 tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-125'>
                <h2 className='tw-font-extrabold tw-text-lg tw-mb-3'>Reminders</h2>
                <p className='text-md'>Create and assign your task with due dates and reminders.</p>
             </div>
             <div data-aos="flip-left" className='tw-w-[25%] tw-border tw-bg-transparent hover:tw-bg-white hover:tw-text-blue-500 tw-p-9 tw-mx-10 tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-125'>
                <h2 className='tw-font-extrabold tw-text-lg tw-mb-3'>Cloud Synced</h2>
                <p className='text-md'>Store as many notes you can safely backed up on cloud.</p>
             </div>
             <div data-aos="flip-left" className='tw-w-[25%] tw-border tw-bg-transparent hover:tw-bg-white hover:tw-text-blue-500 tw-p-9 tw-mx-10 tw-transition-all tw-ease-in-out tw-duration-700 hover:tw-scale-125'>
                <h2 className='tw-font-extrabold tw-text-lg tw-mb-3'>Privacy Friendly</h2>
                <p className='text-md'>We focus on building it open source and privacy focused. </p>
             </div>
     </section>
  )
}

export default About
