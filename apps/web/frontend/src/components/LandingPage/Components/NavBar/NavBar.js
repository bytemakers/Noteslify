import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  const [navbar, setNavbar] = useState(false);
  const onClickHandler = () => {
    setNavbar(!navbar);
  };

  return (
    <header className="nav-container">
      <nav className="navbar max-w mx-auto">
        <span className="logo">
          <Link>
            <img src="favicon.ico" alt="icon" className="logo-img" />
            <h3 className="logo-text">Noteslify</h3>
          </Link>
        </span>
        <div
          className={`${"hamburger"} ${navbar && "open"}`}
          onClick={onClickHandler}
        >
          <div class={`${"btn__burger"} `}></div>
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
    </header>
  );
};

export default NavBar;
