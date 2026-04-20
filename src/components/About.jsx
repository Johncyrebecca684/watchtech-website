import React from 'react';
import { ShieldCheck, Award, Zap } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-grid">
          <div className="about-content">
            <h2 className="about-title">Redefining Commercial Laundry</h2>
            <div className="about-text-content">
              <p>
                <strong>Washtec</strong> redefines commercial laundry equipment distribution with unmatched expertise and reliability. As the exclusive regional distributor for <span className="highlight">LG, Speed Queen, Pony, and IPSO</span>, we deliver advanced washers, dryers, and ironing systems designed to elevate performance across industries.
              </p>
              <p>
                Driven by innovation and commitment, we provide businesses with technology that ensures efficiency, durability, and long-term success in every laundry operation.
              </p>
            </div>
            
            <div className="features-grid">
              <div className="feature-item">
                <div className="feature-icon"><Award size={24} /></div>
                <h4>Exclusive Distributor</h4>
                <p>Authorized for top global brands.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><Zap size={24} /></div>
                <h4>Advanced Technology</h4>
                <p>High efficiency and durability.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><ShieldCheck size={24} /></div>
                <h4>Unmatched Reliability</h4>
                <p>Long-term success guaranteed.</p>
              </div>
            </div>
          </div>
          <div className="about-image-wrapper">
            <div className="about-image glass-panel">
              <div className="image-placeholder">
                <img src="/hero_banner.png" alt="Commercial Laundry" className="about-img" />
              </div>
              <div className="experience-badge">
                <span className="years">10+</span>
                <span className="text">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
