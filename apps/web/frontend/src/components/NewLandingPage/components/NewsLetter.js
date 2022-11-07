import React from 'react'

const NewsLetter = () => {
  return (
    <section className='tw-flex tw-justify-center tw-items-center tw-flex-col tw-p-6'>
        <img src = "assets/email.png" alt = "email" className='tw-w-[20vw]'/>
        <h1 className='tw-text-[2rem] tw-text-[#3b73c6] '>SUBSCRIBE</h1>
        <p className='tw-text-lg'>Suscribe to our Newsletter & stay Updated</p>
        <div className=' tw-flex tw-justify-around tw-items-center tw-gap-3 tw-w-[20vw] tw-mt-3'>
                <input type="email" placeholder="Your email id here" className='tw-px-8 tw-rounded-[25px] tw-py-3 tw-w-[15vw]'/>
                <button className="tw-py-3 tw-px-3 tw-text-white tw-bg-[#3b73c6] tw-rounded-[25px] hover:tw-text-[#3b73c6] hover:tw-bg-white">Suscribe</button>
        </div>
    </section>
  )
}

export default NewsLetter
