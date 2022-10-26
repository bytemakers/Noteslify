import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav className="navbar">
        <span className="logo">
          <Link>
            <img src="favicon.ico" alt="icon" className="logo-img" />
            <h3 className="logo-text">Noteslify</h3>
          </Link>
        </span>
        <div className="hamburger" onClick={onClickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </div>
        <ul className={`elements ${!navbar && "show"} ${navbar && "hide"}`}>
          <li className="list">
            <Link to="/">
              <li>Home</li>
            </Link>
          </li>
          <li className="list">
            <a href="#About">
              <li>Features</li>
            </a>
          </li>
          <li className="list">
            <a href="https://github.com/dvstechlabs/Noteslify">
              <li>Github</li>
            </a>
          </li>
          <li className="list">
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </li>
          <li className="list">
            <Link to="/Notes">
              <li>Dashboard</li>
            </Link>
          </li>
          <li className="list">
            <Link to="/Signup">
              <button className="btn">Get Started</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
