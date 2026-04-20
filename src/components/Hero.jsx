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
            Excellence in <br/><span className="text-gradient">Every Wash</span>
          </h1>
          <p className="hero-subtitle">
            Your Gateway to World-Class Laundry Equipment. Authorized Distributor for LG, Speed Queen, Pony & IPSO.
          </p>
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
