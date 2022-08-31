import React, { useState } from "react"
const Navbar = () => {

    const [navopen, setNavopen] = useState(false)
    const Menu = () => {
        return setNavopen(!navopen)
    }

    return (
        <nav className="bg-white p-5 lg:flex lg:items-center lg:justify-between">
            <div className="flex items-center justify-between">
                <a href="#" className="text-base cursor-pointer text-[#3B73C6] font-[600] md:text-2xl hidden md:block">
                    Noteslify
                </a>
                <div className="text-3xl cursor-pointer mx-2 lg:hidden block">
                    <span className={navopen ? 'hidden' : 'menu'} onClick={Menu}>☰</span>
                    <span className={navopen ? 'close' : 'hidden'} onClick={Menu}>X</span>
                </div>
            </div>
            <ul className={`bg-white opacity-0 top-[-400px] transition-all ease-in duration 500 z-[1]  
            absolute bg-blue-200  pl-7 py-4 w-full left-0 lg:flex lg:items-center lg:z-auto lg:static 
            lg:bg-[#e9e9e9] lg:w-auto lg:py-0 lg:pl-0 lg:opacity-100 ${navopen ? 'opacity-100 top-[80px]' : 'opacity-0'}`}>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <a href="#" className="text-base hover:text-cyan-500 duration-500">Home</a>
                </li>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <a href="#" className="text-base hover:text-cyan-500 duration-500">Features</a>
                </li>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <a href="#" className="text-base hover:text-cyan-500 duration-500">Pricing</a>
                </li>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <a href="#" className="text-base hover:text-cyan-500 duration-500">Contact</a>
                </li>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <a href="#" className="text-base hover:text-cyan-500 duration-500">Dashboard</a>
                </li>
                <li className="bg-white mx-4 my-6 lg:my-0">
                    <button className="text-base py-[0.7rem] px-[2rem] bg-[#3B73C6] text-white rounded-[15px]">Get
                        Started</button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar