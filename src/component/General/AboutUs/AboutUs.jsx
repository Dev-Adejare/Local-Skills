import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './AboutUs.css';
import image1 from '../../../assets/skill.jpg';
import image2 from '../../../assets/Soft skills (1).gif';
import image3 from '../../../assets/skillbulb.jpg';
import image4 from '../../../assets/skillcmp.jpg';
import image5 from '../../../assets/skillloading.jpg';
import mission1 from '../../../assets/mission.jpeg';
import mission2 from '../../../assets/mission2.jpeg';
import How1 from '../../../assets/how1.jpeg';
import How2 from '../../../assets/how2.jpeg';
import features1 from '../../../assets/benefit.jpeg';
import features2 from '../../../assets/ben2.jpeg';
import Footer from '../Footer/Footer';
// import Navbar from '../Navbar/Navbar';


const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* <div><Navbar/></div> */}
     <div className='about-us-wel'><h1>Welcome to Soft Skills Exchange Platform</h1></div>
      <p>
        In a world where community and collaboration are increasingly important, we are excited to introduce the 
        <strong> Soft Skills Exchange Platform</strong>. Our platform is designed to connect individuals within a community who have valuable skills to share with those who need them. Whether you're a seasoned professional or a passionate hobbyist, our platform provides a space for everyone to contribute and benefit from the collective knowledge and expertise of their community.
      </p> 

    <div className='about-carousel'>
    <Carousel  showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={image1} alt="Skill exchange 1" />
          <p className="legend">Skill exchange 1</p>
        </div>
        <div>
          <img src={image2} alt="Skill exchange 2" />
          <p className="legend">Skill exchange 2</p>
        </div>
        <div>
          <img src={image3} alt="Skill exchange 3" />
          <p className="legend">Skill exchange 3</p>
        </div>
        <div>
          <img src={image4} alt="Skill exchange 4" />
          <p className="legend">Skill exchange 4</p>
        </div>
        <div>
          <img src={image5} alt="Skill exchange 5" />
          <p className="legend">Skill exchange 5</p>
        </div>
      </Carousel>
    </div>

     
     

     
      <h2>Our Mission</h2>
      <p>
        Our mission is to empower communities by fostering an environment where skills and knowledge can be freely exchanged. We believe that everyone has something valuable to offer, and by facilitating these exchanges, we aim to:
      </p>
      <ul>
        <li><strong>Strengthen Community Bonds:</strong> By bringing people together to share their skills and knowledge, we create stronger, more connected communities.</li>
        <li><strong>Promote Lifelong Learning:</strong> Learning is a lifelong journey. Our platform encourages continuous personal and professional development.</li>
        <li><strong>Enhance Local Economies:</strong> By utilizing local talents and resources, we support and boost local economies.</li>
      </ul>
      <div className='about-carousel'>
    <Carousel  showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={mission1} alt="Skill exchange 1" />
          <p className="legend">Mission 1</p>
        </div>
        <div>
          <img src={mission2} alt="Skill exchange 2" />
          <p className="legend">Mission 2</p>
        </div>
        
      </Carousel>
    </div>

      <h2>How It Works</h2>
      <p>The Soft Skills Exchange Platform operates on a simple yet effective model:</p>
      <ol>
        <li><strong>Sign Up and Create a Profile:</strong> Users sign up and create a profile detailing their skills and the services they can offer or are seeking.</li>
        <li><strong>Browse and Connect:</strong> Browse through a diverse range of skills and services offered by other community members. Connect with individuals who have the expertise you need or who need the expertise you have.</li>
        <li><strong>Exchange Skills:</strong> Arrange skill exchanges either through direct swaps or community events facilitated by the platform.</li>
        <li><strong>Earn and Redeem Points:</strong> Earn points for every service you provide, which can be redeemed for services you need from others.</li>
      </ol>
      <div className='about-carousel'>
    <Carousel  showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={How1} alt="Skill exchange 1" />
          <p className="legend">Mission 1</p>
        </div>
        <div>
          <img src={How2} alt="Skill exchange 2" />
          <p className="legend">Mission 2</p>
        </div>
        
      </Carousel>
    </div>

      <h2>Features and Benefits</h2>
      <ul>
        <li><strong>User-Friendly Interface:</strong> Our platform is designed to be intuitive and easy to use, ensuring that everyone can participate regardless of their technical proficiency.</li>
        <li><strong>Diverse Skill Categories:</strong> From gardening and carpentry to coding and graphic design, our platform covers a wide range of skills.</li>
        <li><strong>Trust and Safety:</strong> User reviews, ratings, and a verification system help maintain a trustworthy and safe community.</li>
        <li><strong>Community Events:</strong> Regular workshops, seminars, and networking events to foster in-person connections and skill-sharing.</li>
        <li><strong>Mobile Accessibility:</strong> Access our platform on the go with our mobile-friendly website and app.</li>
      </ul>

      <div className='about-carousel'>
    <Carousel  showArrows={true} autoPlay={true} infiniteLoop={true}>
        <div>
          <img src={features1} alt="Features and Benefit 1" />
          <p className="legend">Features and Benefit  1</p>
        </div>
        <div>
          <img src={features2} alt="Features and Benefit 2" />
          <p className="legend">Features and Benefit  2</p>
        </div>
        
      </Carousel>
    </div>


      <h2>Join Us Today</h2>

      <p>
        Whether you're looking to learn a new skill, share your expertise, or simply connect with like-minded individuals in your community, the Soft Skills Exchange Platform is the place for you. Join us today and be a part of a vibrant, supportive, and dynamic community where everyone's skills are valued and everyone has something to learn and teach.
      </p>

      
      <div className="buttons">
          <button className="learn-more">Learn More</button>
        </div>

      <div className='--about-footer'><Footer/></div>

    </div>
  );
};

export default AboutUs;
