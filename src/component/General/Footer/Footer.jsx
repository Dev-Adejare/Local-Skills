import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-logo">
          <h2>SoftSkills</h2>
          <p>Best online platform where members can post the skills<br /> or services they can offer or need.</p>
        </div>
        <div className="footer-links">
          <div className="footer-column">
            <h3>Support</h3>
            <ul>
              <li><a href="#">Forum Support</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Pricing & Plans</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Important</h3>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Installation Process</a></li>
              <li><a href="#">My Account</a></li>
              <li><a href="#">Privacy & Policy</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>Get In Touch</h3>
            <ul>
              <li><a href="tel:(888)2345-6789">📞 (+234)8067986920</a></li>
              <li><a href="mailto:info@example.com">📧 sodiqkehinde64@yahoo.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
