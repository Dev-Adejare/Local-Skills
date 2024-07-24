import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import imageSection from "../../../assets/Soft-skills(2).gif";


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="form-section">
          <h1>Welcome back</h1>
          <p>Please Enter your Account details</p>
          <form>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Johndoe@gmail.com"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
              />
            </div>
            <a href="#" className="forgot-password">
              Forgot Password
            </a>
            
              <button type="submit" className="sign-in-button">Sign in</button>
            
            {/* <div className="social-login">
              <img src="/path-to-google-icon.png" alt="Google" />
              <img src="/path-to-github-icon.png" alt="GitHub" />
              <img src="/path-to-facebook-icon.png" alt="Facebook" />
            </div> */}
            <Link to="/register">
              <a href="#" className="create-account">Create an account</a>
            </Link>  
          </form>
        </div>
        <div className="info-section">
          <h2>What's our Skill-Seekers Said!</h2>
          <blockquote>
            "Search and find your needfull skills is now easier than ever. Just
            browse here and apply if you need to."
            <cite>Mas Kenny, UI Designer at DltAfrica </cite>
          </blockquote>

          <div className="additional-info">
            <h3>Get your right Skills at the right place now</h3>
            <p>
              Be among the first founders to experience the easiest way to start
              enjoying local skills.
            </p>
          </div>
        </div>
            {/* <div className="illustration-container">
              <img src={imageSection} alt="illustration" />
            </div> */}
      </div>
    </div>
  );
};

export default Login;
