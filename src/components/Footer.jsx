import React from 'react';
import { MessageCircle } from 'lucide-react';
import './Footer.css';

const InstagramIcon = ({ size = 20 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37a4 4 0 1 1-7.75 1.25 4 4 0 0 1 7.75-1.25z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Washtec<span className="dot">.</span></h2>
            <p>Your gateway to world-class laundry equipment. Redefining commercial laundry with unmatched expertise.</p>
            <div className="social-links">
              <a href="https://wa.me/919901097311" className="social-icon" aria-label="Chat on WhatsApp" target="_blank" rel="noreferrer"><MessageCircle size={20} /></a>
              <a href="https://www.instagram.com/washtec21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="social-icon" aria-label="Visit Instagram" target="_blank" rel="noreferrer"><InstagramIcon size={20} /></a>
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
              <li>chiranjeevi.d@washteclaundry.com</li>
              <li>+91 9901097311</li>
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
