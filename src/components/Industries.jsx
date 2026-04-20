import React from 'react';
import { Hotel, Utensils, HeartPulse, Factory, GraduationCap } from 'lucide-react';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      title: "Hotels & Resorts",
      description: "Reliable laundry equipment solutions for hospitality businesses.",
      icon: <Hotel size={40} />,
      color: "blue"
    },
    {
      title: "Restaurants & Food Outlets",
      description: "Efficient systems designed to handle high-volume linen and uniforms.",
      icon: <Utensils size={40} />,
      color: "orange"
    },
    {
      title: "Healthcare Facilities",
      description: "Hygienic and dependable laundry equipment for hospitals and clinics.",
      icon: <HeartPulse size={40} />,
      color: "red"
    },
    {
      title: "Industrial Operations",
      description: "Heavy-duty machines tailored for manufacturing and industrial needs.",
      icon: <Factory size={40} />,
      color: "gray"
    },
    {
      title: "Institutions",
      description: "Professional laundry solutions for schools, colleges, and government offices.",
      icon: <GraduationCap size={40} />,
      color: "green"
    }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <h2>Industries We Serve</h2>
        <p className="section-subtitle">Delivering tailored, high-performance laundry solutions across diverse sectors.</p>
        
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div key={index} className={`industry-card border-${industry.color}`}>
              <div className={`industry-icon bg-${industry.color}`}>
                {industry.icon}
              </div>
              <h3>{industry.title}</h3>
              <p>{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
