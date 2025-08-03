const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// User registration
router.post('/register', authController.registerUser);

// Vendor registration
router.post('/vendor/register', authController.registerVendor);

// Unified login (user or vendor)
router.post('/login', authController.login);

// Email verification (GET link from email)
router.get('/verify-email', authController.verifyEmail); // ✅ ADD THIS LINE

// Test route
router.get('/test', (req, res) => {
  res.send('Auth routes are working!');
});

module.exports = router;
