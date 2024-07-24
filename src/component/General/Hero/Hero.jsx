import React from "react";
import "./Hero.css";
import HeroImage from "../../../assets/imageSection.jpg";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="--Hero-Image">
        <img src={HeroImage} alt="" />
      </div>

      <div className="--Hero-Content">
        <h2 className="jj">
          Empowering Connections On Our <br /> Local Skills Exchange Platform
        </h2>
        <p>
         Welcome to Our Community! Our Platform is designed to Connect individuals worldwide who are passionate about<br />expanding their knowledge, sharing their expertise, and learning from others in a supportive community environment.
         
        </p>
        <div className="--Hero-SubContent">
          <IoShieldCheckmarkSharp size={25} color="#ff6b6b"/>

          <div className="--Hero-SubContent-inner">
            <h3>
              Empowering <span className="span">Global</span> Skill Exchange
            </h3>
            <p>
              We are dedicated to fostering a vibrant community where<br />  individuals can exchange skills, knowledge, and experiences in our community.
            </p>
          </div>
        </div>
        <div className="--Hero-SubContent">
          <IoShieldCheckmarkSharp size={25} color="#ff6b6b"/>
          <div className="--Hero-SubContent-inner">
            <h3>Transform Global Learning through Skill Exchange</h3>
            <p>
              We envision a world every invidual, regardless <br />
              of location or background, has the opportunity to thrive through shared knowledge and skills.
              
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
