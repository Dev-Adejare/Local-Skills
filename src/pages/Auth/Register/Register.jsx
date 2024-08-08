import React, { useEffect, useState, useCallback, useContext } from "react";
import "./Register.css";
import imageSection from "../../../assets/Soft-skills(2).gif";
import PasswordInput from "../../../component/General/PasswordInput/PasswordInput";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaTimes } from "react-icons/fa";
import { BsCheck2All } from "react-icons/bs";
import axios from "axios";
import { UserContext } from "../../../../context/userContext";
import Loader from "../../../component/General/Loader/Loader";

const Register = () => {
  const [loading, setLoading] = useState(true);
  const { setUser } = useContext(UserContext);
  const [formValidMessage, setFormValidMessage] = useState("");
  const [formCompleted, setFormCompleted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    fullname: "",
    email: "",
    age: "",
    gender: "",
    password: "",
    password2: "",
  });

  const navigate = useNavigate();

  const [uCase, setUCase] = useState(false);
  const [num, setNum] = useState(false);
  const [sChar, setSChar] = useState(false);
  const [passLength, setPassLength] = useState(false);

  const timesIcon = <FaTimes color="red" size={15} />;
  const checkIcon = <BsCheck2All color="green" size={15} />;

  const switchIcon = (condition) => {
    return condition ? checkIcon : timesIcon;
  };

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

  const handleInputChange = useCallback((e) => {
    setFormValidMessage("");
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  useEffect(() => {
    const { password } = formData;
    setUCase(/([a-z].*[A-Z])|([A-Z].*[a-z])/.test(password));
    setNum(/[0-9]/.test(password));
    setSChar(/[!,%,&,@,#,$,^,*,?,_,~]/.test(password));
    setPassLength(password.length > 5);
  }, [formData.password]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      const { username, fullname, email, age, gender, password, password2 } =
        formData;

      if (!username ||!fullname ||!email ||!age ||!gender || !password || !password2) {
        setFormValidMessage("All fields are required");
        return;
      }

      if (password !== password2) {
        setFormValidMessage("Password does not match!");
        return;
      }

      setIsSubmitting(true);

      axios
        .post(`http://localhost:5173/register`, formData)
        .then((response) => {
          setUser(response.data);
          setIsSubmitting(false);
          setFormCompleted(true);
          toast.success("Registration Successful");
          navigate("/login", { state: { user: response.data } });
        })
        .catch((error) => {
          setIsSubmitting(false);
          const message =
            error.response?.status === 400
              ? "A user with the same email address already exists"
              : "Server error unable to process your registration";
          setFormValidMessage(message);
        });
    },
    [formData, navigate, setUser]
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="register-container">
          <div className="form-wrapper">
            <div className="form-container">
              <h2>Create an Account</h2>
              <p>Sign Up Now & Unlock Exclusive Skills Success!</p>
              <form onSubmit={handleSubmit}>
                <div className="input-flex">
                  <div className="input-container">
                    <label htmlFor="name">UserName:</label>
                    <input
                      type="text"
                      className="input"
                      name="username"
                      placeholder="Enter username"
                      onChange={handleInputChange}
                      value={formData.username}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="name">Full Name:</label>
                    <input
                      type="text"
                      className="input"
                      name="fullname"
                      placeholder="Enter Fullname"
                      onChange={handleInputChange}
                      value={formData.fullname}
                    />
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="age">Email:</label>
                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="yourname@gmail.com"
                    onChange={handleInputChange}
                    value={formData.email}
                  />
                </div>
                <div className="input-flex">
                  <div className="input-container">
                    <label htmlFor="age">Age:</label>
                    <input
                      type="text"
                      className="input"
                      name="age"
                      placeholder="Enter age"
                      onChange={handleInputChange}
                      value={formData.age}
                    />
                  </div>
                  <div className="input-container">
                    <label htmlFor="gender">Gender:</label>
                    <input
                      type="text"
                      className="input"
                      name="gender"
                      placeholder="Male || Female"
                      onChange={handleInputChange}
                      value={formData.gender}
                    />
                  </div>
                </div>
                <div className="select-container">
                  <select id="country" name="country" placeholder="Country">
                    <option value="Nigeria">select your country ⬇</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="input-container">
                  <label htmlFor="password">Password:</label>
                  <PasswordInput
                    placeholder="Password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    autocomplete="new-password" 
                  />
                </div>
                <div className="input-container">
                  <label htmlFor="password"> Confirm Password:</label>
                  <PasswordInput
                    placeholder="Confirm Password"
                    name="password2"
                    value={formData.password2}
                    onChange={handleInputChange}
                    onPaste={(e) => {
                      e.preventDefault();
                      toast.error("Cannot paste into input field");
                      return false;
                    }}
                    autocomplete="new-password" 
                  />
                </div>
                <div className="card">
                  <ul className="form-list">
                    <li>
                      <span className="indicator">
                        {switchIcon(uCase)}&nbsp; Lowercase & Uppercase
                      </span>
                    </li>
                    <li>
                      <span className="indicator">
                        {switchIcon(num)}&nbsp; Number (0-9)
                      </span>
                    </li>
                    <li>
                      <span className="indicator">
                        {switchIcon(sChar)}&nbsp; Special Character (!@#$%^&*)
                      </span>
                    </li>
                    <li>
                      <span className="indicator">
                        {switchIcon(passLength)}&nbsp; At least 6 Characters
                      </span>
                    </li>
                  </ul>
                </div>
                <button
                  className="create-account-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Adding User..." : "Sign Up"}
                </button>
                <p style={{ marginTop: 8, fontSize: 18 }}>
                  Already a user?{" "}
                  <a href="/login" style={{ color: "#20736b" }}>
                    Login
                  </a>
                </p>
              </form>
              {formValidMessage && (
                <p className="error-message">{formValidMessage}</p>
              )}
            </div>
            <div className="illustration-container">
              <img src={imageSection} alt="illustration" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
