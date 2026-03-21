import React from 'react'
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className='hero'>
      <div className='hero_context'>
        <h1>
          <span className='highlight'>Welcome to Todo Application!</span><br/>          
          <span className='subtext'>If you cant remember that definitely loosing opportunity</span>
        </h1>
        <p>Organize your tasks, boost your productivity, and never miss a deadline again with our intuitive and user-friendly to-do application.</p>
        <Link to='/register' className='btn_register'>Get Started</Link>
        <Link to='/login' className='btn_login'>Already have an account? Login</Link>
      </div>
    </div>
  )
}

export default Landing;
