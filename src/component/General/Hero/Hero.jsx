import React from "react";
import "./Hero.css";
import heroImage from "../../../assets/imageSection.jpg";


const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
        <div className="hero-text">
          <h1>Manage All Data Through This Dashboard Based App</h1>
          <p>
            Duis gravida augue velit eu dignissim felis pos quis. Integ ante
            urna gravida nec molestie mattis ultrices risus sed fermentum
            egestas. Sed egestas felis erat faucibus neque semper mattis.
          </p>
          <div className="features">
            <div className="feature">
              <span className="check-icon">✔</span>
              <div>
                <h2>Well Organised Interface</h2>
                <p>
                  Duis gravida augue velit eu dignissim felis pos quis. Integ
                  ante urna gravida nec molestie mattis ultrices risus sed.
                </p>
              </div>
            </div>
            <div className="feature">
              <span className="check-icon">✔</span>
              <div>
                <h2>
                  Completely Bug Free{" "}
                  <span className="new-feature">New Feature</span>
                </h2>
                <p>
                  Vestibulum mollis sapien est, sit amet commodo turpis bibendum
                  ma. Morbi eleifend nisl eget dui rutrum efficitur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
