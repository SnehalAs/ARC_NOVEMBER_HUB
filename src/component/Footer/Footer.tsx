import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

import "./Footer.css";
const Footer = () => {
  return (
    
    <footer className='footer'>

<div className='main-contact'>
      <div className='Contact-upper'>
        <h1>See all that you can accomplish with Hubnex Labs</h1>
        <button className="contact">
              Contact Us <FaArrowRight />
            </button>
      </div>
      <div className='Contact-lower'>
        <h1>Let’s grow 💪 <br />
        together with the faster ecosystem</h1>
        <button className="contactt">
              Contact Us <FaArrowRight />
            </button>
      </div>
      <div className='horizontal-linee'></div>
    </div>
      <div className='footer-content'>
        <div className='footer-section about'>
        <div className="logo-container">
      <img
        src="public\assets\hubnexlogo.svg"
        alt="Hubnex Logo"
        className="logo-image"
      />
      <div className="logo-textt">
        Hubnex
        <span className="logo-subtextt">Labs</span>
      </div>
    </div>
          <h2 >About Hubnex Labs</h2>
          <p>
            We are a leading IT consultancy with expertise in innovative
            solutions for modern challenges. Our client-centric approach enables
            us to design tailored solutions that keep businesses ahead in the
            ever-evolving digital landscape.
          </p>
          <div className='social-icons'>
            <i>
              <FaTwitter />
            </i>
            <i>
              <FaFacebookF />
            </i>
            <i>
              <FaInstagram />
            </i>
            <i>
              <FaGithub />
            </i>
          </div>
        </div>
        <div className='Alllinks'>
          <div className='footer-section links'>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Services</li>
              <li>Careers</li>
              <li>For Partners</li>
            </ul>
          </div>
          <div className='footer-section links'>
            <h3>Help</h3>
            <ul>
              <li>Grievance Redressal Policy</li>
              <li>Community</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='footer-section links'>
            <h3>Resources</h3>
            <ul>
              <li>Blogs</li>
              <li>Case Studies</li>
              <li>Carrers</li>
              <li>Insights</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
//
