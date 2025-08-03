import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="welcome-card">
        <h1>Welcome to Mern Auth 🌿</h1>
        <p>Build the perfect authentication flow.</p>
        <div className="btn-group">
          <button onClick={() => navigate('/login')}>Login</button>
          <button onClick={() => navigate('/register?role=user')}>Sign Up as User</button>
          <button onClick={() => navigate('/register?role=vendor')}>Sign Up as Vendor</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
