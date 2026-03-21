import { useState } from "react";
import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import Authservices from "../../services/Authservices";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../Utils/Errormessage";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };

      const response = await Authservices.loginUser(data);

      console.log("Login Response:", response.data);

      // store login data
      localStorage.setItem("todoapp", JSON.stringify(response.data));

      toast.success("Login successful!");

      // navigate after login
      navigate("/Home");

    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log("Login Error:", err);
    }
  };

  return (
    <div className="form-container">
      <div className="form">

        <div className="mb-3">
          <i className="fa-solid fa-user"></i>
        </div>

        <form onSubmit={handleLogin}>

          <div className="mb-3">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              placeholder="Enter Your Password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>

        </form>

        <div className="mt-3">
          <span>Don't have an account? </span>
          <Link to="/register">Register</Link>
        </div>

      </div>
    </div>
  );
};

export default Login;