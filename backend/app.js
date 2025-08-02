const express = require('express');
const cors = require('cors');
const app = express();

const cookieParser = require('cookie-parser');

// Cookie Parser
app.use(cookieParser());


// CORS configuration
app.use(cors({
  origin: 'http://localhost:3000', // your frontend origin
  credentials: true
}));

// Middleware
app.use(express.json()); // Middleware to parse JSON

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

//vendor onboarding
const authVendorRoutes = require('./routes/authVendor');
app.use('/api/vendor', authVendorRoutes);
module.exports = app;