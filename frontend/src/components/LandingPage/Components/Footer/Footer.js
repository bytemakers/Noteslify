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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                        voluptatem corporis error non,
                    </p>

                    <div className="social">
                        <i className="fa-brands fa-facebook-square"></i>
                        <i className="fa-brands fa-instagram-square"></i>
                        <i className="fa-brands fa-twitter-square"></i>
                        <i className="fa-brands fa-youtube-square"></i>
                        <i className="fa-brands fa-whatsapp-square"></i>
                    </div>
                </div>

                <div className="column links">
                    <h3>Some Links</h3>

                    <ul className='ul'>

                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
                        </li>
                    </ul>

                </div>


                <div className="column links">
                    <h3>Some Links</h3>
                    <ul className='ul'>
                        <li>
                            <a href="#faq">F.A.Q</a>
                        </li>
                        <li>
                            <a href="#cookies-policy">Cookies Policy</a>
                        </li>
                        <li>
                            <a href="#terms-of-services">Terms Of Service</a>
                        </li>
                        <li>
                            <a href="#support">Support</a>
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

                    {/* <a href="">Home</a> */}
                    <a href="">Feature</a>
                    <a href="">Github</a>
                    <a href="">Contact</a>
                    {/* <a href="">Dashboard</a> */}

                </div>
                <p>Copyright &copy;</p>
            </div>
        </footer>
    );
};

export default Footer;
