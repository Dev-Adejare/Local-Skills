import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./BlogPage.css";
import blogImage1 from "../../../assets/image2.png";
import blogImage2 from "../../../assets/imageSection.jpg";
import blogImage3 from "../../../assets/Soft skills (3).gif";
import blogImage4 from "../../../assets/Soft-skills(2).gif";
import blogImage5 from "../../../assets/Soft-skills.gif";
import blogImage6 from "../../../assets/Soft skills (3).gif";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const BlogPage = () => {
  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="blog-page-container">
        <h1>Soft Skills for a Thriving Community</h1>
        <p className="blog-intro">
          Soft skills are essential in building a thriving community where
          collaboration and mutual respect are the norms. On our Soft Skills
          Exchange Platform, you can learn and share these crucial skills,
          empowering yourself and others in your community. Let’s explore why
          soft skills are so important and how you can develop them.
        </p>

        <div className="blog-carousel">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-styles"
          >
            <div>
              <img src={blogImage1} alt="Effective Communication" />
              <p className="carousel-slide-legend">
                Effective Communication: The Foundation of Community Building
              </p>
            </div>
            <div>
              <img src={blogImage2} alt="Leadership and Teamwork" />
              <p className="carousel-slide-legend">
                Leadership and Teamwork: Driving Success Together
              </p>
            </div>
            <div>
              <img src={blogImage3} alt="Emotional Intelligence" />
              <p className="carousel-slide-legend">
                Emotional Intelligence: Understanding and Supporting Each Other
              </p>
            </div>
          </Carousel>
        </div>

        <section className="blog-content">
        <div>
        <h1>Why Soft Skills Matter</h1>
          <p className="blog-intro">
            Soft skills, such as communication, empathy, and adaptability, are
            critical in fostering a cooperative and supportive environment. <br />
            Unlike hard skills, which are specific to certain tasks, soft skills
            are universally applicable, enhancing every interaction and
            relationship. Here’s how soft skills contribute to a stronger
            community:
          </p>
          <ul>
            <li>
              <strong>Better Communication:</strong> Clear and empathetic
              communication helps in resolving conflicts, building trust, and
              ensuring that everyone feels heard and valued.
            </li>
            <li>
              <strong>Stronger Leadership:</strong> Effective leaders inspire
              others, provide guidance, and foster a sense of belonging within
              the community.
            </li>
            <li>
              <strong>Enhanced Collaboration:</strong> With strong teamwork
              skills, individuals can work together more effectively, combining
              their strengths to achieve common goals.
            </li>
          </ul>
          <div className="blog-carousel">
          <Carousel
            showArrows={true}
            autoPlay={true}
            infiniteLoop={true}
            className="carousel-styles"
          >
            <div>
              <img src={blogImage4} alt="Effective Communication" />
              
            </div>
            <div>
              <img src={blogImage5} alt="Leadership and Teamwork" />
             
            </div>
            <div>
              <img src={blogImage6} alt="Emotional Intelligence" />
              
            </div>
          </Carousel>
        </div>
        </div>

        <div>
        <h1>How to Develop Your Soft Skills</h1>
          <p className="blog-intro">
            Developing soft skills is a continuous process that involves
            self-awareness, practice, and feedback. Here are some tips to get
            started:
          </p>
          <ol>
            <li>
              <strong>Seek Feedback:</strong> Ask for feedback from peers and
              mentors to identify areas for improvement and track your progress
              over time.
            </li>
            <li>
              <strong>Practice Active Listening:</strong> Focus on truly
              understanding what others are saying, rather than just waiting for
              your turn to speak.
            </li>
            <li>
              <strong>Participate in Group Activities:</strong> Join community
              projects or team-based events to practice leadership, teamwork,
              and communication in real-world settings.
            </li>
            <li>
              <strong>Embrace Challenges:</strong> Step out of your comfort zone
              and take on new challenges that push you to develop new skills and
              adapt to different situations.
            </li>
          </ol>
        </div>
        </section>

        <div className="blog-call-to-action">
          <h1>Get Involved</h1>
          <p>
            Ready to take your soft skills to the next level? Join our community
            on the Soft Skills Exchange Platform and start your journey towards
            personal and professional growth today. Connect with others,
            exchange skills, and be part of a movement that’s transforming
            communities one skill at a time.
          </p>
          <div className="blog-btn">
            <Link to="/register">
              <button className="blog-join-btn">Join the Platform</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="blog-footer">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;
