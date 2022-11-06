import React from 'react'

const Description = () => {
  return (
    <section className = "tw-flex tw-justify-between tw-items-start tw-flex-col tw-p-6" id = "About">
        <div className="tw-flex tw-justify-around tw-items-center h-screen tw-bg-[url('assets/background-pattern.jpg')] tw-bg-cover tw-min-w-full">
          <div data-aos="fade-left">
            <img src="assets/mobile.png" alt="mobileimage" asset = "mobile-design" className='tw-h-[80vh]'/>
        </div>
        <div data-aos="fade-right" className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-[40vw]'>
          <h2 className = "tw-text-[2.5rem] tw-mb-6 tw-text-blue-500">What is Noteslify?</h2>
          <p className='tw-w-[30vw] tw-text-blue-100'>Noteslify gives you everything you need to keep life organized—great note taking, project planning, and easy ways to find what you need, when you need it. </p>
        </div>
        </div>

        <div className="tw-flex tw-justify-around tw-items-center h-screen tw-flex-row tw-bg-[url('assets/background-pattern.jpg')] tw-bg-cover tw-min-w-full">

        <div data-aos="fade-left" className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-[40vw]'>
          <h2 className = "tw-text-[2.5rem] tw-mb-6 tw-text-blue-500">Powerful And Simple Notes</h2>
          <p className='tw-w-[30vw] tw-text-blue-100'>Create Backups and Share - Record Notes and Capture Pictures - Classify Notes Into Categories - Upload Unlimited</p>
        </div>
          <div data-aos="fade-right">
            <img src="assets/mobile2.png" alt="mobileimage2" asset = "mobile-design" className='tw-h-[80vh]'/>
        </div>

        </div>
        <div className="tw-flex tw-justify-around tw-items-center h-screen tw-bg-[url('assets/background-pattern.jpg')] tw-bg-cover tw-min-w-full">
          <div data-aos="fade-left">
            <img src="assets/mobile3.png" alt="mobileimage3" asset = "mobile-design" className='tw-h-[80vh]'/>
        </div>
        <div data-aos="fade-right" className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-w-[40vw]'>
          <h2 className = "tw-text-[2.5rem] tw-mb-6 tw-text-blue-500">Security Focused</h2>
          <p className='tw-w-[30vw] tw-text-blue-100'>We focus on building it open source and privacy focused. Giving users complete control over the data they own.</p>
        </div>
        </div>
    </section>
  )
}

export default Description
