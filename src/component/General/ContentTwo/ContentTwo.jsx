import React from 'react';
import './ContentTwo.css';

const ContentTwo = () => {
  return (
    <div className="digital-experience">
      <div className="header">
        <h1>We Create The World Best <br />Platform  </h1>
        <p>
          Duis gravida augue velit eu dignissim felis <br />pos quis.Integ ante urna gravida nec molestie.
        </p>
      </div>
      <div className="cards">
        <div className="card">
          <div className="icon analytics"></div>
          <h2>Active User Analytics</h2>
          <p>
            Duis gravida augue velit – eu dignissim felis posuere quis integ ante urna.
          </p>
          <a href="#learn-more-analytics">Learn More</a>
        </div>
        <div className="card">
          <div className="icon coding"></div>
          <h2>Smart Coding Development</h2>
          <p>
            Duis gravida augue velit – eu dignissim felis posuere quis integ ante urna.
          </p>
          <a href="#learn-more-coding">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default ContentTwo;
