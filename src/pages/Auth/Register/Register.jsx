import React, { useEffect, useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import imageSection from "../../../assets/Soft-skills(2).gif";

const Register = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryNames = data.map((country) => country.name.common).sort();
        setCountries(countryNames);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <div className="register-container">
      <div className="form-wrapper">
        <div className="form-container">
          <h2>Create an Account</h2>
          <p>Sign Up Now & Unlock Exclusive Skills Success!</p>
          <form>
            <div className="input-flex">
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Username"
                />
              </div>
              <div className="input-container">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div className="input-container">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="select-container">
              <select id="country" name="country" placeholder="Country">
                <option value="Nigeria" >
                  select your country    ⬇
                </option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Confirm Password"
              />
            </div>
            <button type="submit" className="create-account-button">
              Create Account
            </button>
            {/* <Link to="/login"> */}
            <p style={{ marginTop: 8, fontSize: 18 }}>
              Already a user?{" "}
              <a href="/login" style={{ color: "#20736b" }}>
                Login
              </a>
            </p>
            {/* </Link> */}
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
