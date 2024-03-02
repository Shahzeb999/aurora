import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="App-footer">
      <p>&copy; {new Date().getFullYear()} Aurora AI. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
