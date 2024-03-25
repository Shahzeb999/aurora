import React, { useState, useEffect } from 'react';
import '../NavBar.css';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="logo">
          <img src="/aurora_stars.png" alt="Aurora Logo" />
          <h2>Aurora</h2>
        </div>
        <hr />
        <ul className="nav-links">
          <li><a href="#why-aurora">Why Aurora?</a></li>
          <li><a href="#job-search">Job Search</a></li>
          <li><a href="#take-interview">Take Interview</a></li>
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
      </div>
    </nav>
  );
};

export default NavBar;
