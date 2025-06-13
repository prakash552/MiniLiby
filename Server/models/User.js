const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
});

module.exports = mongoose.model('User', userSchema);


// This code defines a Mongoose schema for a User model in a Node.js application.
// The schema includes fields for name, email, phone, and password.
