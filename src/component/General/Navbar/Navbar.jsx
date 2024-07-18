import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">L$kills</div>
      <ul className="menu">
        <li className="menu-item">Home</li>
        <li className="menu-item">Pages</li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">Shop</li>
        <li className="menu-item">Portfolio</li>
        <li className="menu-item">Contact</li>
      </ul>
      <button className="sign-up-button">Sign Up Free</button>
    </nav>
  );
};

export default Navbar;
