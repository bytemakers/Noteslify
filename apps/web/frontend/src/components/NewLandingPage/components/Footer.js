import React from 'react'

const Footer = () => {
  return (
    <footer className='tw-bg-[#B9D9EB] tw-text-[#3b73c6] tw-min-w-full tw-p-12 tw-flex tw-justify-between tw-items-center'>
        <div className='tw-flex tw-justify-between tw-items-left tw-flex-col tw-gap-3'>
             <div className="tw-flex tw-justify-left tw-items-center tw-gap-x-2">
            <img src = "assets/logo.png" alt = "logo" className='tw-w-4 tw-h-4'/>
            <h1 className='tw-text-left tw-font-extrabold tw-text-blue-500'>Noteslify</h1>
            </div>
            <p className = "tw-w-[18vw]">Your Privacy Friendly, Open Source.Capture your notes, files, and life’s work all in one secure place.</p>
            
            <div className='tw-flex tw-gap-3'>
                <a title="GitHub" href="https://github.com/dvstechlabs/Noteslify"><i className="fa-brands fa-github-square"></i></a>
                        <a title="YouTube" href="#test"><i className="fa-brands fa-youtube-square"></i></a>
                        <a title="Facebook" href="#test"><i className="fa-brands fa-facebook-square"></i></a>
                        <a title="Twitter" href="#test"><i className="fa-brands fa-twitter-square"></i></a>
                        <a title="YouTube" href="#test"><i className="fa-brands fa-youtube-square"></i></a>
            </div> 
            </div>
            <div className='tw-flex tw-justify-around tw-items-center tw-flex-col  tw-gap-3'>
             <h3 className='tw-text-blue-500'>Links</h3>

                    <ul className='tw-list-none'>

                        <li className='tw-mb-2'>
                            <a href="#faq">Home</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#cookies-policy">Contact</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#terms-of-services">Features</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#support">Discord</a>
                        </li>
                           <li className='tw-mb-2'>
                            <a href="#support">Github</a>
                        </li>
                    </ul>
              </div>  
            <div className='tw-flex tw-justify-around tw-items-center tw-flex-col  tw-gap-3'>
             <h3 className='tw-text-blue-500'>Soon..</h3>

                    <ul className='tw-list-none'>

                        <li className='tw-mb-2'>
                            <a href="#faq">Soon..</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#cookies-policy">Soon..</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#terms-of-services">Soon..</a>
                        </li>
                        <li className='tw-mb-2'>
                            <a href="#support">Soon..</a>
                        </li>
                    </ul>
              </div>
              <div className=' tw-flex tw-justify-around tw-items-center tw-flex-col tw-gap-3 tw-w-[20vw]'>
                {/* <h2 className='tw-text-blue-500 tw-font-bold'>Newsletter</h2> */}
                        <input type="email" placeholder="Your email id here" className='tw-px-4 tw-py-2'/>
                        <button className="tw-py-3 tw-px-3 tw-w-[10vw] tw-text-white tw-bg-[#3b73c6] tw-rounded-[15px] hover:tw-text-[#3b73c6] hover:tw-bg-white">Suscribe</button>
              </div>    
       
    </footer>
  )
}

export default Footer
