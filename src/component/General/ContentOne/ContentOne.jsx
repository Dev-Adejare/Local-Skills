import React from 'react';
import './ContentOne.css';
import imageSection from "../../../assets/hcm.webp";

const ContentOne = () => {
  return (
    <div className="content-one">
      <div className="text-content">
        <h2>Boost Your Skills and Services</h2>
        <h1>Versatile App For Locals <br /> Skills and Exchange Platform</h1>
        <p>
          Best Online Platform Where Members Can Post The Skills<br /> or Services They Can Offer or Need.
        </p>
        <div className="buttons">
          <button className="learn-more">Learn More</button>
        </div>
      </div>
      <div className="image-content">
        <img src={imageSection} alt="Versatile app" />
       
      </div>
    </div>
  );
};

export default ContentOne;
