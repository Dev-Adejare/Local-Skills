import React, { useState } from 'react';
import './Features.css';
import featureImage from "../../../assets/featureImage.jpg";
 

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="featurez">
     <div className='featurezz'>
     <h2>Awesome Features</h2>
     <h1>Our Features Smartly Presented <br />Graphical Form Quickly</h1>
     </div>
      <div className="feature-content">
        <div className="accordion">
          <div className={`accordion-item ${activeIndex === 0 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(0)}>
              <h3>Custom Edit Tool Application</h3>
              <span>{activeIndex === 0 ? '-' : '+'}</span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-body">
                <p>Duis gravida augue velit eu dignissim felis quis. Integ ante urna gravida nec.</p>
                <button>Learn More</button>
              </div>
            )}
          </div>
          <div className={`accordion-item ${activeIndex === 1 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(1)}>
              <h3>Built In Safty Chat Mode</h3>
              <span>{activeIndex === 1 ? '-' : '+'}</span>
            </div>
            {activeIndex === 1 && (
              <div className="accordion-body">
                <p>Duis gravida augue velit eu dignissim felis quis. Integ ante urna gravida nec.</p>
              </div>
            )}
          </div>
          <div className={`accordion-item ${activeIndex === 2 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(2)}>
              <h3>Foster Trust Builds</h3>
              <span>{activeIndex === 2 ? '-' : '+'}</span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-body">
                <p>Duis gravida augue velit eu dignissim felis quis. Integ ante urna gravida nec.</p>
              </div>
            )}
          </div>
          <div className={`accordion-item ${activeIndex === 3 ? 'active' : ''}`}>
            <div className="accordion-header" onClick={() => toggleAccordion(3)}>
              <h3>Create Auto Layout</h3>
              <span>{activeIndex === 3 ? '-' : '+'}</span>
            </div>
            {activeIndex === 3 && (
              <div className="accordion-body">
                <p>Duis gravida augue velit eu dignissim felis quis. Integ ante urna gravida nec.</p>
              </div>
            )}
          </div>
        </div>
        <div className="image-section">
          <img src={featureImage} alt="Features" />
        </div>
      </div>
    </div>
  );
};

export default Feature;
