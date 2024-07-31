import React from "react";
import "./ContentTwo.css";

const ContentTwo = () => {
  return (
    <div className="digital-experience">
      <div className="header">
        <h1>
          We Create The World Best <br />
          Platform To Grow Skills{" "}
        </h1>
        <p>
          We believe in the Power <br />
          of collaboration and the transformative Potential of Skill exchange.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon analytics"></div>
          <h2>Exchange Skills</h2>
          <p>
            Local skill exchange platforms often offer more flexibility and
            convenience compared to larger, more impersonal services.
            Scheduling, location, and specific requirements can be easily
            managed and negotiated within the community.
          </p>
          <a href="#learn-more-analytics">Learn More</a>
        </div>
        <div className="card">
          <div className="icon coding"></div>
          <h2>Empowering Connections Platform</h2>
          <p>
            Welcome to our Community! Our platform is designed to connect
            individuals worldwide who are passionate about expanding their
            expertise and learning from others in a supportive community
            environment.
          </p>

          <Link to="/aboutUs">
            <a href="#learn-more-coding">Learn More</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentTwo;
