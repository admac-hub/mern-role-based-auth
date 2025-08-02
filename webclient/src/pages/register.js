import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import authApi from '../api/authApi';

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Extract role from URL query string
  const queryParams = new URLSearchParams(location.search);
  const role = queryParams.get('role') || 'user';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    category: '', // only used if vendor
  });

  const handleChange = (e) => {
  setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = role === 'vendor' ? formData : { ...formData, category: undefined };

      // ✅ If vendor, include credentials to save the cookie
      if (role === 'vendor') {
        await authApi.register(role, data, true); // pass withCredentials flag
        navigate('/vendor/onboarding');
      } else {
        await authApi.register(role, data);
        navigate('/login');
      }
    } catch (err) {
      console.error('Registration error:', err);
    }
  };

  return (
    <div>
      <h2>{role === 'vendor' ? 'Vendor Registration' : 'User Registration'}</h2>
      <form onSubmit={handleSubmit}>
        <input name="firstName" placeholder="First Name" onChange={handleChange} required />
        <input name="lastName" placeholder="Last Name" onChange={handleChange} required />
        <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
        <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
        {role === 'vendor' && (
          <input name="category" placeholder="Category" onChange={handleChange} required />
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
