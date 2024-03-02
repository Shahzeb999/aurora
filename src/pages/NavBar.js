import React from 'react';
import '../App.css';

const NavBar = () => {
  return (
    <nav className="App-nav">
      <div className="logo">Aurora</div>
      <div className="nav-items">
        <a href="#product">Product</a>
        <a href="#skills">Skills</a>
        <a href="#vetting">Vetting</a>
        <a href="#opportunities">Opportunities</a>
        <a href="#apply" className="apply-link">Apply for work</a>
      </div>
    </nav>
  );
};

export default NavBar;
