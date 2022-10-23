import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <footer>
            <div className="row primary">
                <div className="column about">

                    <h3>Noteslify</h3>

                    <p>
                        Your Privacy Friendly, Open Source. Alternative to EverNote.

                        Capture your notes, files, and life’s work all in one secure place.
                    </p>


                    <div className="social">
                        <a title="GitHub" href="https://github.com/dvstechlabs/Noteslify"><i className="fa-brands fa-github-square"></i></a>
                        <a title="YouTube" href="#test"><i className="fa-brands fa-youtube-square"></i></a>
                        <a title="Facebook" href="#test"><i className="fa-brands fa-facebook-square"></i></a>
                        <a title="twitter" href="#test"><i className="fa-brands fa-twitter-square"></i></a>
                        <a title="youtube" href="#test"><i className="fa-brands fa-youtube-square"></i></a>
                    </div>

                </div>

                <div className="column links">
                    <h3>Soon..</h3>

                    <ul className='ul'>

                        <li>
                            <a href="#faq">Soon..</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Soon..</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Soon..</a>
                        </li>
                        <li>
                            <a href="#support">Soon..</a>
                        </li>
                    </ul>

                </div>


                <div className="column links">
                    <h3>Soon..</h3>
                    <ul className='ul'>
                        <li>
                            <a href="#faq">Soon..</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Soon..</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Soon..</a>
                        </li>
                        <li>
                            <a href="#support">Soon..</a>
                        </li>
                    </ul>
                </div>

                <div className="column subscribe">
                    <h3>Newsletter</h3>
                    <div>
                        <input type="email" placeholder="Your email id here" />
                        <button>Subscribe</button>
                    </div>

                </div>

            </div>

            <div className="row copyright">
                <div className="footer-menu">

                    <a href="http://noteslify.stonecss.com/">Home</a>
                    <a href="#test">Feature</a>
                    <a href="https://github.com/dvstechlabs/Noteslify">Github</a>
                    <a href="http://noteslify.stonecss.com/contact">Contact</a>
                    <a href="http://noteslify.stonecss.com/notes">Dashboard</a>

                </div>
                <p>Copyright &copy; 2022 | DVS Tech Labs</p>
            </div>
        </footer>
    );
};

export default Footer;
