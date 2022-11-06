import React from 'react'

const HeroSection = () => {
  return (
    <section className='tw-flex tw-justify-center tw-items-center tw-gap-12 tw-mt-22 tw-bg-[url("assets/background-pattern.jpg")] tw-bg-no-repeat tw-bg-cover'>
        <div className='tw-flex tw-justify-left tw-items-left tw-flex-col tw-mx-[5rem] '>
            <h1 className='tw-text-left tw-text-xl'>Privacy Friendly , Open Source</h1>
            <p className='tw-text-[2.5rem] font-extrabold tw-text-blue-100 tw-text-left'>
              Capture your notes, files, 
              and life’s work all in one 
              <span className='tw-text-[#3b73c6]'> secure place.</span></p>
        <div className='tw-flex tw-justify-left tw-items-left tw-mt-6 tw-gap-3'>
           <button className="tw-py-3 tw-px-2 tw-bg-[#3b73c6] tw-text-white tw-rounded-[15px] tw-w-[40%] hover:tw-text-[#3b73c6] hover:tw-bg-white">Get Started</button>
           <button className="tw-border tw-py-3 tw-px-4 tw-bg-transparent tw-rounded-[15px] tw-w-[40%]  hover:tw-text-[#3b73c6] hover:tw-bg-white">Github</button>
        </div>
        </div>
        <div className='tw-w-full'>
          <img src = "assets/study.png" alt = "illustration"/>
        </div>        
    </section>
  )
}

export default HeroSection
