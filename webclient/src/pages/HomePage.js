import '../styles/HomePage.css'; // or './styles/HomePage.css'
// HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container d-flex justify-content-center align-items-center min-vh-100">
      <div className="card shadow-lg text-center p-5" style={{ maxWidth: '500px' }}>
        <h1 className="mb-3">Welcome to Menrn-auth 🌱</h1>
        <p className="mb-4">
          Plsease lets build a nice authentcation system.
        </p>
        <div className="d-grid gap-3">
          <button className="btn btn-primary" onClick={() => navigate('/login')}>
            Login
          </button>
          <button className="btn btn-outline-success" onClick={() => navigate('/register?role=user')}>
            Sign up as User
          </button>
          <button className="btn btn-outline-dark" onClick={() => navigate('/register?role=vendor')}>
            Sign up as Vendor
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
