import React from 'react';
import './index.css';
import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#privacy">Privacy</a>
        <a href="#terms">Terms</a>
        <a href="#contact">Contact</a>
        <a href="#trimfeed">TrimFeed</a>
      </div>
      <div className="footer-icons">
        <a href="#twitter"><FaTwitter /></a>
        <a href="#linkedin"><FaLinkedin /></a>
        <a href="#instagram"><FaInstagram /></a>
        <a href="#facebook"><FaFacebook /></a>
      </div>
    </footer>
  );
}

export default Footer;