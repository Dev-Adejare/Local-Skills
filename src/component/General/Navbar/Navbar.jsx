import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">SoftSkills</div>
      <ul className="menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Explore Skills</li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">My Skills</li>
        <li className="menu-item">Contact</li>
        <li className="menu-item">Community</li>
      </ul>
      <Link to="/register">
        <button className="sign-up-button">Sign Up</button>
      </Link>
    </nav>
  );
};

export default Navbar;



