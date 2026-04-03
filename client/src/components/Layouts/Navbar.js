import React from 'react'
import { useState,useEffect } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'

// Navbar component to display navigation links and user info
const Navbar = () => {
    const [username, setusername] = useState("");

    // Fetch username from localStorage on component 
    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("todoapp"));
        console.log(" "+ storedData && storedData.user.name);
        setusername(storedData && storedData.user.name);
        }
        , []);
        
    // For navigation after logout
    const navigate = useNavigate()
    
    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("todoapp");
        toast.success("Logout successful!");
        navigate("/login");
    }
  return (
  <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">

        <div className="navbar-brand">
          <h4>
            <i className="fa-solid fa-list-check"></i> Welcome {username}! &nbsp;
          </h4>
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link active" to="/Home">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/todolist">My Todolist</Link>
            </li>

            <li className="nav-item">
              <button className="nav-link border-0 bg-transparent" onClick={handleLogout}>
                <i className="fa-solid fa-arrow-right-from-bracket text-red-500"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
)
};


export default Navbar