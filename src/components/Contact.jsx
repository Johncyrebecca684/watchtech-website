import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="contact-container glass-panel">
          <div className="contact-info">
            <h2>Contact Washtec</h2>
            <p className="contact-subtitle">Your trusted source for world-class laundry equipment.</p>
            
            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h4>Head Office</h4>
                  <p>123 Laundry Avenue, Industrial District, City, Country</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>info@washtec.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <select id="industry">
                  <option value="">Select your industry</option>
                  <option value="hotel">Hotels & Resorts</option>
                  <option value="restaurant">Restaurants & Food Outlets</option>
                  <option value="healthcare">Healthcare Facilities</option>
                  <option value="industrial">Industrial Operations</option>
                  <option value="institution">Institutions</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="4" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
