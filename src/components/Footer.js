import React from 'react';
import logo from '../logo_anusuya.png';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-nav">
          <a href="#/Home">Home</a>
          <a href="#/Projects">Projects</a>
          <a href="#/AboutUs">About Us</a>
          <a href="#/Contact">Contact</a>
        </div>

        <div className="footer-copy">
          &copy; {new Date().getFullYear()} Anusuya Software Solutions. All rights reserved.
        </div>

        <div className="footer-socials">
          {/* Replace with your actual social icons/links */}
          <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer">FB</a>
          <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer">TW</a>
          <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noreferrer">IN</a>
        </div>

        <div className="footer-logo-container">
          <img src={logo} alt="Anusuya Logo" className="footer-logo" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;