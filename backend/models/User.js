const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  email:     { type: String, required: true, unique: true },
  password:  { type: String, required: true },
  role:      { type: String, enum: ['user', 'vendor'], default: 'user' },
  isOnboarded: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  fullName:  { type: String },
});

userSchema.pre('save', function (next) {
  this.fullName = `${this.firstName} ${this.lastName}`;
  next();
});

module.exports = mongoose.model('User', userSchema);
