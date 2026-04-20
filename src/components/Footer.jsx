import React from 'react';
import { Globe, MessageCircle, Share2, AtSign } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Washtec<span className="dot">.</span></h2>
            <p>Your gateway to world-class laundry equipment. Redefining commercial laundry with unmatched expertise.</p>
            <div className="social-links">
              <a href="#" className="social-icon"><Globe size={20} /></a>
              <a href="#" className="social-icon"><MessageCircle size={20} /></a>
              <a href="#" className="social-icon"><Share2 size={20} /></a>
              <a href="#" className="social-icon"><AtSign size={20} /></a>
            </div>
          </div>
          
          <div className="footer-links-group">
            <h3>Explore</h3>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#industries">Industries</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#services">Services</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3>Legal</h3>
            <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div className="footer-links-group">
            <h3>Contact</h3>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li>info@washtec.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Washtec. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
