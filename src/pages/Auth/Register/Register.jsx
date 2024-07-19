import React from 'react';
import './Register.css';
import imageSection from "../../../assets/Soft-skills(2).gif";


const Register = () => {
  return (
    <div className="register-container">
      <div className="form-wrapper">
        <div className="form-container">
          <h2>Create an Account</h2>
          <p>Sign Up Now & Unlock Exclusive Skills Success!</p>
          <form>
            <div className="input-container">
              <input type="text" id="name" name="name" placeholder="First Last" />
            </div>
            <div className="input-container">
              <input type="email" id="email" name="email" placeholder="you@email.com" />
            </div>
            <div className="input-container">
              <input type="password" id="password" name="password" placeholder="********" />
            </div>
            <button type="submit" className="create-account-button">Create Account</button>
            <button type="button" className="sign-in-button">Sign in</button>
          </form>
        </div>
        <div className="illustration-container">
          <img src={imageSection} alt="illustration" />
        </div>
      </div>
    </div>
  );
};

export default Register;
