import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    industry: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      await emailjs.send(
        'service_7258r09',
        'template_3ugmqou',
        {
          name: formData.name,
          user_name: formData.name,
          from_name: formData.name,
          email: formData.email,
          user_email: formData.email,
          from_email: formData.email,
          reply_to: formData.email,
          subject: formData.industry,
          industry: formData.industry,
          message: formData.message,
          user_message: formData.message
        },
        'w-36V_lK_uq0pzYnW'
      );

      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully. We will get back to you soon.'
      });

      setFormData({
        name: '',
        email: '',
        industry: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Unable to send your message right now. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  <p>+91 99010 97311</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h4>Email</h4>
                  <p>washteclaundryequipment@gmail.com</p>
                </div>
              </div>

              <div className="contact-social-links" aria-label="Contact social links">
                <a
                  href="https://wa.me/919901097311"
                  className="contact-social-icon"
                  aria-label="Chat on WhatsApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="https://www.instagram.com/washtec21?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  className="contact-social-icon"
                  aria-label="Visit Instagram"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramIcon size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h3>Send us a message</h3>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry">Industry</label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                >
                  <option value="">Select your industry</option>
                  <option value="Hotels & Resorts">Hotels & Resorts</option>
                  <option value="Restaurants & Food Outlets">Restaurants & Food Outlets</option>
                  <option value="Healthcare Facilities">Healthcare Facilities</option>
                  <option value="Industrial Operations">Industrial Operations</option>
                  <option value="Institutions">Institutions</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  placeholder="How can we help you?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
              </button>

              {submitStatus.message ? (
                <p className={`form-status ${submitStatus.type}`}>{submitStatus.message}</p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
