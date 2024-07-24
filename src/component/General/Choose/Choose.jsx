import React from "react";
import "./Choose.css";

const Choose = () => {
  return (
    <div className="choose-container">
      <div className="choose">
        <h2 className="choose-why">Why Us</h2>
        <h1 className="choose-heading">
          Why Will You Choose Our <br />
          Best Exchange Platform
        </h1>
        <p className="choose-subheading">
          Choosing our platform is a smart and sustainable choice that benefits
          individuals and the community. <br />
          It promotes community building, cost-effectiveness, skill development,
          sustainability, trust, support for the local economy, customized
          solutions, social benefits, flexibility, and the sharing economy.
        </p>
      </div>

      <div className="featuring">
        <div>
          <h1>Community Building</h1>
          <p className="choose-subheading">
            {" "}
            Local skill exchange platforms foster a sense of community and
            belonging. By connecting with neighbors and local residents,
            individuals can form stronger bonds, creating a supportive and
            collaborative environment.
          </p>

          <h1>Skill Development</h1>
          <p className="choose-subheading">
            {" "}
            Local skill exchange platforms provide opportunities for continuous
            learning and personal development. Participants can both share their
            expertise and learn new skills from others, enhancing their
            knowledge base and improving their employability.
          </p>
        </div>
        <div>
          <h1>Trust and Reliability</h1>
          <p className="choose-subheading">
            {" "}
            Since exchanges are conducted within a local community, there is
            often a higher level of trust and accountability. Participants are
            more likely to know each other personally or through mutual
            connections, leading to more reliable and trustworthy exchanges.
          </p>

          <h1>Social Benefits</h1>
          <p className="choose-subheading">
            {" "}
            Participating in a local skill exchange can lead to increased social
            interactions and reduced feelings of isolation. It provides a
            platform for people to meet, interact, and collaborate, which can
            enhance social well-being and mental health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
