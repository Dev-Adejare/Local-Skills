import React, { useState } from "react";
import "./Features.css";
import featureImage from "../../../assets/featureImage.jpg";
import { Link } from "react-router-dom";

const Feature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="featurez">
      <div className="featurezz">
        <h2>Awesome Features</h2>
        <h1>
          Explore Our Features <br />
          Expand Your Skills from Anywhere
        </h1>
      </div>
      <div className="feature-content">
        <div className="accordion">
          <div
            className={`accordion-item ${activeIndex === 0 ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(0)}
            >
              <h3>Direct and Local Skill Exchange Platform</h3>
              <span>{activeIndex === 0 ? "-" : "+"}</span>
            </div>
            {activeIndex === 0 && (
              <div className="accordion-body">
                <p>
                  Connect with members who are passionate about sharing their
                  expertise and helping you get your task done.
                </p>

                <div className="button">
                  <Link to="/aboutUs">
                    <button className="learn-more">Learn More</button>
                  </Link>
                </div>
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 1 ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(1)}
            >
              <h3>Empowering Connections On Our Skills Exchange Platfrom </h3>
              <span>{activeIndex === 1 ? "-" : "+"}</span>
            </div>
            {activeIndex === 1 && (
              <div className="accordion-body">
                <p>
                  Our Platform is designed to connect individuals worldwide who
                  are apssionate about their knowledge and sharing their skills
                  with others
                </p>
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 2 ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(2)}
            >
              <h3>Foster Trust Builds</h3>
              <span>{activeIndex === 2 ? "-" : "+"}</span>
            </div>
            {activeIndex === 2 && (
              <div className="accordion-body">
                <p>
                  Our Platform is desinged and manage with user Trust Builds!
                  Here, both user and service Providers have nothing to worry
                  about as our Community is a supportive Community Environment
                </p>
              </div>
            )}
          </div>
          <div
            className={`accordion-item ${activeIndex === 3 ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => toggleAccordion(3)}
            >
              <h3>Flexible Engagement</h3>
              <span>{activeIndex === 3 ? "-" : "+"}</span>
            </div>
            {activeIndex === 3 && (
              <div className="accordion-body">
                <p>
                  Engage with people at your own pace and schedule skills that
                  fit your wants and availability
                </p>
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
