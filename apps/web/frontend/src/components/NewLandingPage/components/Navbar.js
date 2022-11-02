const Navbar = () => { 
    return (
       <div className="Navbar">
         <img src="favicon.png" alt="icon" className="logo-img" />
         <h3 className="logo-text">Noteslify</h3>
         <div className="menu tw-flex">
            <ul className="tw-flex tw-w-[100%] tw-justify-between">
               <li>Home</li>
               <li>Features</li>
               <li>Github</li>
               <li>Contact</li>
               <li>Dashboard</li>
            </ul>
         </div>
         <div className="buttons">
             <button>Get started</button>
         </div>
       </div>   
  )
}

export default Navbar
