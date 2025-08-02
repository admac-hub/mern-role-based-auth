const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || '685A2ADCD85C2D8E3E3BBCE5F1C6A';

// Register user
exports.registerUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'user',
      isOnboarded: true,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id, role: 'user' }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: false, // set to true in production with HTTPS
        sameSite: 'Lax',
        maxAge: 3600000, // 1 hour
      })
      .status(201)
      .json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Register vendor
exports.registerVendor = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Vendor already exists as user' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newVendorUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      role: 'vendor',
      isOnboarded: false,
    });

    await newVendorUser.save();

    const token = jwt.sign({ id: newVendorUser._id, role: 'vendor' }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        maxAge: 3600000,
      })
      .status(201)
      .json({ message: 'Vendor registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Login for user or vendor
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const account = await User.findOne({ email });
    if (!account) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isMatch = await bcrypt.compare(password, account.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: account._id, role: account.role }, JWT_SECRET, {
      expiresIn: '1h',
    });

    res
      .cookie('token', token, {
        httpOnly: true,
        secure: false,
        sameSite: 'Lax',
        maxAge: 3600000,
      })
      .status(200)
      .json({
        message: 'Login successful',
        role: account.role,
        isOnboarded: account.isOnboarded,
      });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
