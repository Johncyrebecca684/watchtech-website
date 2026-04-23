import React from 'react';
import './Products.css';

const Products = () => {
  const machines = [
    {
      id: 'lg',
      brand: 'LG',
      type: 'LG Giant Gas Dryer',
      machineImage: '/gas dryer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Engineered for efficient and reliable drying, this gas dryer is perfect for heavy-duty applications, saving time and energy.',
    },
    {
      id: 'speed-queen',
      brand: 'LG',
      type: 'LG Giant Electric Dryer',
      machineImage: '/giant electric dryer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Designed for efficient drying of laundry, this electric dryer offers high performance and energy savings for heavy-duty use.',
    },
    {
      id: 'pony',
      brand: 'LG',
      type: 'LG Giant Washer',
      machineImage: '/giant washer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Perfectly suited for heavy-duty laundry, it\'s designed to handle high volumes with ease while saving both water and electricity.',
    },
    {
      id: 'ipso',
      brand: 'LG',
      type: 'LG Titan Washer',
      machineImage: '/titan washer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Designed for efficient washing, this washer offers high performance and reliability, ideal for heavy-duty use.',
    },
    {
      id: 'lg-titan-electric-dryer',
      brand: 'LG',
      type: 'Titan Electric Dryer',
      machineImage: '/titan electric dryer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Designed for efficient drying of laundry, this electric dryer offers high performance and energy savings for heavy-duty use.',
    },
    {
      id: 'lg-titan-gas-dryer',
      brand: 'LG',
      type: 'Titan Gas Dryer',
      machineImage: '/titan gas dryer.png',
      logoImage: '/lg%20logo.png',
      logoAlt: 'LG logo',
      ribbonDescription: 'Engineered for efficient and reliable drying, this gas dryer is perfect for heavy-duty applications, saving time and energy.',
    },
  ];

  const speedQueenMachines = [
    {
      id: 'sq-touch-washer',
      brand: 'Speed Queen',
      type: 'Quantum Touch Washer Extractor',
      machineImage: '/Speed%20Queen%20Quantum%20Touch%20Washer%20Extractor.png',
      ribbonDescription: 'Experience ultimate performance and user-friendly operation with the Speed Queen Quantum Touch Washer Extractor. Designed for commercial use, it ensures durability and efficiency.',
      customClass: 'sq-touch-image',
    },
    {
      id: 'sq-touch-washer-27kg',
      brand: 'Speed Queen',
      type: 'Quantum Touch Washer Extractor 27kg',
      machineImage: '/Speed%20Queen%20Quantum%20Touch%20Washer%20Extractor%2027kg.png',
      ribbonDescription: 'Experience ultimate performance and user-friendly operation with the Speed Queen Quantum Touch Washer Extractor. Designed for commercial use, it ensures durability and efficiency.',
      customClass: 'sq-touch-image',
    },
    {
      id: 'sq-tumble-dryer-16kg',
      brand: 'Speed Queen',
      type: 'Commercial Tumble Dryer 16kg',
      machineImage: '/Commercial%20Tumble%20Dryer%2016kg.png',
      ribbonDescription: 'Designed for commercial performance and reliability, the Speed Queen Commercial Tumble Dryer 16kg offers user-friendly operation, advanced programmability, and a robust design perfect for VEND and OPL setups.',
      customClass: 'sq-touch-image',
      cardClass: 'sq-smaller-name',
    },
    {
      id: 'sq-tumble-dryer-25kg',
      brand: 'Speed Queen',
      type: 'Commercial Tumble Dryer 25kg',
      machineImage: '/Commercial%20Tumble%20Dryer%2025kg.png',
      ribbonDescription: 'Designed for commercial performance and reliability, the Speed Queen Commercial Tumble Dryer 25kg offers user-friendly operation, advanced programmability, and a robust design perfect for VEND and OPL setups.',
      customClass: 'sq-touch-image',
      cardClass: 'sq-smaller-name',
    },
  ];

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="products-heading">
          <h2>Our Products</h2>
          <img src="/lg logo.png" alt="LG logo" className="products-title-logo" />
        </div>

        <div className="machines-showcase" aria-label="Commercial laundry machines by brand">
          {machines.map((machine) => (
            <article key={machine.id} className="card" data-machine-name={machine.type}>
              <div className="card__body">
                <div className="card__icon">
                  <img src={machine.machineImage} alt={`${machine.brand} machine`} className="machine-image" />
                </div>
              </div>

              <div className={`card__ribbon${machine.ribbonDescription ? ' card__ribbon--text' : ''}`}>
                {machine.ribbonDescription && <p className="card__ribbon-text">{machine.ribbonDescription}</p>}
              </div>
            </article>
          ))}
        </div>

        <div className="products-footer">
          <img src="/speed%20queen.png" alt="Speed Queen logo" className="products-footer-logo" />
        </div>

        <div className="machines-showcase" aria-label="Speed Queen machines showcase" style={{ marginTop: '3rem' }}>
          {speedQueenMachines.map((machine) => (
            <article key={machine.id} className={`card ${machine.cardClass || ''}`} data-machine-name={machine.type}>
              <div className="card__body">
                <div className="card__icon">
                  {machine.machineImage && (
                    <img src={machine.machineImage} alt={`${machine.brand} machine`} className={`machine-image ${machine.customClass || ''}`} />
                  )}
                </div>
              </div>

              <div className={`card__ribbon${machine.ribbonDescription ? ' card__ribbon--text' : ''}`}>
                {machine.ribbonDescription && <p className="card__ribbon-text">{machine.ribbonDescription}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
