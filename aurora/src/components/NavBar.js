import React from 'react';
import '../NavBar.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

// In your component's return statement:



const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/aurora_stars.png" alt="Aurora Logo" />
        <h2>Aurora</h2>
      </div>
      <hr />
      <ul className="nav-links">
        <li><a href="#why-aurora">Why Aurora?</a></li>
        <li><a href="#job-search">Job Search</a></li>
        <li><a href="#take-interview">Take Interview</a></li>
        {/* <li><a href="#pricing">Pricing</a></li> */}
      </ul>
      <hr />
      <div className="nav-footer">
        <div className="resources">
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
            <li><a href="#security">Security</a></li>
            <li><a href="#support">Support</a></li>
          </ul>
        </div>
        <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
        </div>
        <div className="copy-right">
          © Aurora, Inc. 2024 All rights reserved
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
