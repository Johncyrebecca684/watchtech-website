import React, { useState } from 'react';
import { Wrench, HeartHandshake, Headset, ChevronDown, ChevronUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Installation Guidance",
      subtitle: "Smart setup support for flawless performance.",
      icon: <Wrench size={24} />,
      points: [
        "Efficient and professional installation for seamless operations from day one."
      ]
    },
    {
      title: "On-Site Maintenance",
      subtitle: "Reliable support to keep operations smooth.",
      icon: <HeartHandshake size={24} />,
      points: [
        "Comprehensive on-site maintenance and support to keep your business running smoothly."
      ]
    },
    {
      title: "Remote Consultation",
      subtitle: "Expert help, anytime, anywhere.",
      icon: <Headset size={24} />,
      points: [
        "Get expert advice and troubleshooting with our free remote consultation services."
      ]
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2>Our Services</h2>
        <p className="section-subtitle">Focused support to keep your equipment running at its best.</p>
        
        <div className="services-container">
          <div className="services-list">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`service-accordion ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="service-header">
                  <div className="service-title-wrap">
                    <div className="service-icon">{service.icon}</div>
                    <h3>{service.title}</h3>
                  </div>
                  <div className="toggle-icon">
                    {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </div>
                
                <div className="service-body">
                  <p className="service-subtitle">{service.subtitle}</p>
                  <ul className="service-points">
                    {service.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="services-image-side">
            <div className="service-showcase glass-panel">
              <div className="showcase-icon">
                {services[activeIndex].icon}
              </div>
              <h3>{services[activeIndex].title}</h3>
              <p>{services[activeIndex].subtitle}</p>
              <div className="showcase-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
