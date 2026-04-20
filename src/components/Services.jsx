import React, { useState } from 'react';
import { Wrench, HeartHandshake, PackageOpen, Headset, Presentation, ChevronDown, ChevronUp } from 'lucide-react';
import './Services.css';

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Installation Guidance",
      subtitle: "Smart setup support for flawless performance.",
      icon: <Wrench size={24} />,
      points: [
        "Step-by-step guidance for proper machine placement and utility connections.",
        "Clear instructions to ensure smooth integration into your facility.",
        "Focused on helping your team achieve efficiency from day one."
      ]
    },
    {
      title: "Basic Maintenance Assistance",
      subtitle: "Keep your machines reliable with simple upkeep.",
      icon: <HeartHandshake size={24} />,
      points: [
        "Practical advice on routine care to extend equipment life.",
        "Scheduled check-ins to identify early signs of wear.",
        "Support designed to minimize downtime without complex service contracts."
      ]
    },
    {
      title: "Spare Parts Supply",
      subtitle: "Authentic parts, delivered when you need them.",
      icon: <PackageOpen size={24} />,
      points: [
        "Quick access to genuine manufacturer components.",
        "Ensures consistent performance and long-term durability.",
        "Reduces delays by keeping your operations running smoothly."
      ]
    },
    {
      title: "Remote Consultation",
      subtitle: "Expert help, anytime, anywhere.",
      icon: <Headset size={24} />,
      points: [
        "Troubleshooting guidance over phone or online.",
        "Operational tips to resolve issues quickly.",
        "Saves time by avoiding unnecessary service visits."
      ]
    },
    {
      title: "Training & Orientation",
      subtitle: "Confidence through knowledge and hands-on learning.",
      icon: <Presentation size={24} />,
      points: [
        "Introductory sessions for staff to operate machines effectively.",
        "Practical demonstrations on safe and efficient usage.",
        "Builds long-term capability within your team."
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
