import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/register';
import VendorOnboarding from './components/VendorOnboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user/register" element={<Register role="user" />} />
        <Route path="/vendor/register" element={<Register role="vendor" />} />
        <Route path="/vendor/onboarding" element={<VendorOnboarding />} />


        {/* Add more routes like home/dashboard here */}
      </Routes>
    </Router>
  );
}

export default App;
