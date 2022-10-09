import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <section className="bottom-section">
            {/* <img src= "assets/vector-bottom.png" alt = "design" /> */}
            <footer className="footer">
                <section className="flex">
                    <div>
                        <h4>Noteslify</h4>
                        <h5>By DVS Tech Labs</h5>
                        <p>
                            Your Privacy Friendly, Open Source. Alternative to
                            Evernote.
                        </p>
                        <div className="social-media">
                            <ul className="flex">
                                <a href="https://github.com/devarshishimpi/Noteslify">
                                    <li>
                                        <i className="fa-brands fa-github"></i>
                                    </li>
                                </a>
                                <li>
                                    <i className="fa-brands fa-linkedin"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-twitter"></i>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <ul className="flex links">
                            <Link to="/">
                                <li>Home</li>
                            </Link>
                            <li>
                                <a href="#About">Features</a>
                            </li>
                            {/* <li>Pricing</li> */}
                            <Link to="/contact">
                                <li>Contact</li>
                            </Link>
                            <li>
                                <a href="https://github.com/dvstechlabs/Noteslify">
                                    Github
                                </a>
                            </li>
                            <Link to="/Notes">
                                <li>Dashboard</li>
                            </Link>
                            <Link to="/Signup">
                                <li>Get Started</li>
                            </Link>
                        </ul>
                    </div>
                </section>
            </footer>
        </section>
    );
};

export default Footer;
