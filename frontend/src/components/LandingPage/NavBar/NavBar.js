import React from 'react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className= "navbar">
    <div className = "container flex">
      <div className='mobile-nav'>
        <div>
       <h3 className = "logo">Noteslify</h3>
       </div>
       <div className ="menu-display hidden">
       <span className = "close hide">X</span>
       <span className='menu'>☰</span>
       </div>
      </div> 
       <nav>
           <ul className = "flex">
               <li>Home</li>
               <li>Features</li>
               <li>Pricing</li>
               <li>Contact</li>
               <li>Dashboard</li>
           </ul>
           <button>Get Started</button>
       </nav>
    </div>
</div>
  )
}

export default NavBar
