import React, { useEffect, useState, useCallback, useContext } from "react";
import "./Login.css";
import PasswordInput from "../../../component/General/PasswordInput/PasswordInput";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { UserContext } from "../../../../context/userContext";
import Loader from "../../../component/General/Loader/Loader";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [formValidMessage, setFormValidMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleInputChange = useCallback((e) => {
    setFormValidMessage("");
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }, []);

  const loginUser = useCallback(
    (e) => {
      e.preventDefault();

      const { email, password } = formData;

      if (!email || !password) {
        setFormValidMessage("All fields are required");
        return;
      }
      setIsSubmitting(true);

      axios
        .post("http://localhost:3000/api/users/login", formData)
        .then((response) => {
          setUser(response.data);
          setIsSubmitting(false);
          toast.success("Login successful");
          navigate("/marketPlace", { state: { user: response.data } });
        })
        .catch((error) => {
          setIsSubmitting(false);
          console.error("Login error:", error.response?.data || error.message);
          const message =
            error.response?.status === 400
              ? "Invalid Login Credentials."
              : "Server error, unable to Login user.";
          setFormValidMessage(message);
        });
    },
    [formData, Navigate, setUser]
  );

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="login-container">
          <div className="login-wrapper">
            <div className="--login-form-section">
              <h1>Welcome back</h1>
              <p>Please Enter your Account details</p>
              <form onSubmit={loginUser}>
                <div className="input-container">
                  <label htmlFor="email">Email:</label>

                  <input
                    type="email"
                    className="input"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                  />
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

                <button className="--sign-in-button" disabled={isSubmitting}>
                  {isSubmitting ? "Signing In..." : "Sign In"}
                </button>

                <p style={{ marginTop: 8, fontSize: 18 }}>
                  Don&apos;t have an account?{" "}
                  <a href="/register" style={{ color: "#20736b" }}>
                    Sign Up
                  </a>
                </p>
              </form>

              {formValidMessage && (
                <p className="error-message">{formValidMessage}</p>
              )}
            </div>
            <div className="info-section">
              <h2>What's our Skill-Seekers Said!</h2>
              <blockquote>
                "Search and find your needfull skills is now easier than ever.
                Just browse here and apply if you need to."
                <cite>Mas Kenny, UI Designer at DltAfrica </cite>
              </blockquote>

              <div className="additional-info">
                <h3>Get your right Skills at the right place now</h3>
                <p>
                  Be among the first founders to experience the easiest way to
                  start enjoying local skills.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
