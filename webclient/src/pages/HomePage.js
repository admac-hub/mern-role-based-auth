import '../styles/HomePage.css'; // or './styles/HomePage.css'
// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1 className="home-title">🌿 Welcome</h1>
      <p className="home-subtitle">
        The world is yours to Code.
      </p>

      <div className="home-buttons">
        <button onClick={() => navigate('/register?role=user')} className="home-btn">
          Join as User
        </button>
        <button onClick={() => navigate('/register?role=vendor')} className="home-btn-outline">
          Join as Vendor
        </button>
      </div>

      <div className="home-login-link">
        Already have an account?{' '}
        <span
          onClick={() => navigate('/login?role=user')}
          className="home-login-text"
        >
          Log in here
        </span>
      </div>
    </div>
  );
};

export default HomePage;
