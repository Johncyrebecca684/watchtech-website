import React from 'react';
import { Settings, CheckCircle2 } from 'lucide-react';
import './Products.css';

const Products = () => {
  const brands = [
    { name: "LG Commercial Laundry Machines", tags: ["Washers", "Dryers"] },
    { name: "Speed Queen Commercial Laundry Machines", tags: ["Heavy Duty", "Industrial"] },
    { name: "PONY Finishing Equipment", tags: ["Ironing", "Finishing"] },
    { name: "IPSO Commercial Laundry Systems", tags: ["Dependable", "Efficient"] }
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <h2>World-Class Products</h2>
        <p className="section-subtitle">Premium equipment from the world's most trusted manufacturers.</p>
        
        <div className="products-container">
          <div className="equipment-side">
            <h3 className="sub-heading">Laundry Equipment</h3>
            <div className="brands-list">
              {brands.map((brand, index) => (
                <div key={index} className="brand-card">
                  <div className="brand-icon">
                    <CheckCircle2 className="text-primary" size={24} />
                  </div>
                  <div className="brand-info">
                    <h4>{brand.name}</h4>
                    <div className="brand-tags">
                      {brand.tags.map((tag, i) => (
                        <span key={i} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="parts-side">
            <div className="parts-card glass-panel">
              <div className="parts-icon">
                <Settings size={48} />
              </div>
              <h3>Genuine Spare Parts</h3>
              <p>We supply authentic parts for all major brands, ensuring consistent performance, long-term durability, and reduced downtime for your operations.</p>
              <ul className="parts-benefits">
                <li><CheckCircle2 size={16}/> Manufacturer Guaranteed</li>
                <li><CheckCircle2 size={16}/> Quick Delivery</li>
                <li><CheckCircle2 size={16}/> Expert Support</li>
              </ul>
              <a href="#contact" className="btn btn-primary mt-4">Inquire Now</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
