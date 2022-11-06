const Navbar = () => { 
    return (
      <div className="tw-flex tw-justify-between tw-items-center tw-flex-col md:tw-flex-row tw-text-white tw-p-6">
         <div className="tw-flex tw-justify-around tw-items-center tw-gap-x-2">
            <img src = "assets/logo.png" alt = "logo" className="tw-h-6"/>
            <h3>NOTESLIFY</h3>
         </div>
         <div className="tw-flex">
            <ul className="tw-flex tw-w-[100%] tw-justify-around tw-items-center tw-gap-8 tw-cursor-pointer">
               <li>Home</li>
               <li>Features</li>
               <li>Github</li>
               <li>Discord</li>
               <li>Contact</li>
               <li>Dashboard</li>
               <li><button className="tw-py-3 tw-px-6 tw-bg-[#3b73c6] tw-rounded-[25px] hover:tw-text-[#3b73c6] hover:tw-bg-white">Get Started</button></li>
            </ul>
         </div>
           
      </div>   
  )
}

export default Navbar
