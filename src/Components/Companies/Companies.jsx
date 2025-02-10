import React from 'react';
import './Companies.css';

const Companies = () => {
  return (
    <section className="com-wrapper">
        <div className="com-container flexCenter paddings innerWidth">
            <img src="prologis.png" alt="company photo 1" />
            <img src="tower.png" alt="company photo 2" />
            <img src="equinix.png" alt="company photo 3" />
            <img src="realty.png" alt="company photo 4" />
        </div>
    </section>
  )
}

export default Companies