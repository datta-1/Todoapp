import { useState } from "react";
import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import Authservices from "../../services/Authservices";
import toast from "react-hot-toast";
import { getErrorMessage } from "../../Utils/Errormessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name: username,
        email,
        password,
      };

      const response = await Authservices.registerUser(data);

      console.log("Register Response:", response.data);

      toast.success(response.data.message || "User registered successfully");

      navigate("/login");

    } catch (err) {
      toast.error(getErrorMessage(err));
      console.log("Register Error:", err);
    }
  };

  return (
    <div className="form-container">
      <div className="form">

        <div className="mb-3">
          <i className="fa-solid fa-user"></i>
        </div>

        <form onSubmit={handleRegister}>

          <div className="mb-3">
            <input
              type="text"
              placeholder="Enter Your Username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
              minLength="6"
            />
          </div>

          <button type="submit" className="register-btn">
            Register
          </button>

        </form>

        <div className="mt-3">
          <span>Already have an account? </span>
          <Link to="/login">Login</Link>
        </div>

      </div>
    </div>
  );
};

export default Register;