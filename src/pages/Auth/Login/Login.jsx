import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="form-section">
          <h1>Welcome back</h1>
          <p>Please Enter your Account details</p>
          <form>
            <div className="input-container">
              <input type="email" id="email" name="email" placeholder="Johndoe@gmail.com" />
            </div>
            <div className="input-container">
              <input type="password" id="password" name="password" placeholder="********" />
            </div>
            <a href="#" className="forgot-password">Forgot Password</a>
            <button type="submit" className="sign-in-button">Sign in</button>
            {/* <div className="social-login">
              <img src="/path-to-google-icon.png" alt="Google" />
              <img src="/path-to-github-icon.png" alt="GitHub" />
              <img src="/path-to-facebook-icon.png" alt="Facebook" />
            </div> */}
            <a href="#" className="create-account">Create an account</a>
          </form>
        </div>
        <div className="info-section">
          <h2>What's our Skillseekers Said.</h2>
          <blockquote>
            "Search and find your needfull skills is now easier than ever. Just browse here and apply if you need to."
            <cite>Mas Kenny, UI Designer at DltAfrica </cite>
          </blockquote>
          <div className="navigation-buttons">
            <button className="nav-button">←</button>
            <button className="nav-button">→</button>
          </div>
          <div className="additional-info">
            <h3>Get your right Skills at the right place now</h3>
            <p>Be among the first founders to experience the easiest way to start enjoying local skills.</p>
            <div className="avatars">
              <img src="../../../assets/logo.jpg" alt="Avatar 1" />
              <img src="/path-to-avatar2.png" alt="Avatar 2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
