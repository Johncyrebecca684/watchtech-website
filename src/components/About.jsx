import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">About Us</h2>
            <div className="about-text-content">
              <p>
                Washtec is your one-stop destination for commercial laundry excellence. We supply high-performance commercial washers, dryers, and ironing systems sourced from globally acclaimed brands including <span className="highlight">LG, Speed Queen, Pony, IPSO</span>. Whether you&apos;re setting up a new laundry store or upgrading an existing one, our team is committed to delivering dependable solutions and end-to-end support tailored to your business needs.
              </p>
            </div>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image glass-panel">
              <img src="/laundry.jpg" alt="Commercial Laundry" className="about-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
