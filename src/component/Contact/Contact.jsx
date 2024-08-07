import React, { useState } from "react";
import "./Contact.css";
import Footer from "../General/Footer/Footer";
import Navbar from "../General/Navbar/Navbar";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [feedbackSent, setFeedbackSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Feedback submitted:", { name, email, message });
    setFeedbackSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="contact-page">
        <div className="contact-text">
          <h2>Let's Collaborate on Skills and Services</h2>
          <h1>
            Let us know what you'd like to <br /> communicate, and we'll get
            <br /> back to you as soon as possible.
          </h1>
          <p>
            We're the best online platform where members can post the skills
            <br /> or services they can offer or need.
          </p>
        </div>

        <div className="form-section">
          <h1>Contact Us</h1>
          <p>We would love to hear your feedback, questions, or concerns.</p>

          {feedbackSent ? (
            <div className="thank-you-message">
              <h2>Thank you for your feedback!</h2>
              <p>We appreciate you taking the time to reach out to us.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button type="submit" className="form-submit-button">
                Send Feedback
              </button>
            </form>
          )}
        </div>

        <div className="contact-info">
          <h2>Our Contact Information</h2>
          <p>Email: support@example.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Main Street, Hometown, Country</p>
        </div>
      </div>
      <div className="--about-footer">
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
