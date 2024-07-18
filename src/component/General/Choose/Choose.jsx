import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="choose">
        <h2 className="choose-why">Why Us</h2>
        <h1 className="choose-heading">
          Why Will You Choose Our <br />
          Best Application
        </h1>
        <p className="choose-subheading">
          Duis gravida augue velit eu dignissim felis op quis. Inte ante urna
          gravida nec molestie mattis ultr.
        </p>
      </div>

      <div className="featuring">
        <div>
          <h1>Creative Ideas</h1>
          <p className="choose-subheading">
            {" "}
            Duis gravida augue velit eu dignissim felis op quis. Inte ante urna
            gravida nec molestie mattis ultr.
          </p>

          <h1>Best Features</h1>
          <p className="choose-subheading">
            {" "}
            Duis gravida augue velit eu dignissim felis op quis. Inte ante urna
            gravida nec molestie mattis ultr.
          </p>
        </div>
        <div>
          <h1>Awesome Design</h1>
          <p className="choose-subheading">
            {" "}
            Duis gravida augue velit eu dignissim felis op quis. Inte ante urna
            gravida nec molestie mattis ultr.
          </p>

          <h1>Easy Solutions</h1>
          <p className="choose-subheading">
            {" "}
            Duis gravida augue velit eu dignissim felis op quis. Inte ante urna
            gravida nec molestie mattis ultr.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
