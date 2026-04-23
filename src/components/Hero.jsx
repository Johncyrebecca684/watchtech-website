import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="text-gradient">Washtec</span>
          </h1>
          <div className="hero-subtitle">
            <p className="hero-subtitle-text">
              Authorised Regional Distributor For
            </p>
            <div className="hero-brands" aria-label="Authorized distributor brands">
              <div className="hero-brand-item">
                <img src="/lg%20logo.png" alt="LG" className="hero-brand-logo" />
              </div>
              <div className="hero-brand-item">
                <img src="/speed%20queen.png" alt="Speed Queen" className="hero-brand-logo" />
              </div>
              <div className="hero-brand-item">
                <img src="/pony.png" alt="Pony" className="hero-brand-logo" />
              </div>
              <div className="hero-brand-item">
                <img src="/ipso.png" alt="IPSO" className="hero-brand-logo" />
              </div>
            </div>
          </div>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary hero-btn">
              Get Started <ArrowRight size={20} />
            </a>
            <a href="#products" className="btn btn-outline hero-btn outline-white">
              View Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
