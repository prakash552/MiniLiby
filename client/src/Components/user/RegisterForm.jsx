import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate & send data to backend
    console.log('Register Form Submitted:', formData);
  };

  return (
    <div className="register-container">
    <form className="register-form" onSubmit={handleSubmit}>
      <label>Full Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter Full Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <label>Email Address</label>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
        required
      />

      <label>Phone Number (Optional)</label>
      <input
        type="tel"
        name="phone"
        placeholder="Enter Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Create Password"
        value={formData.password}
        onChange={handleChange}
        required
      />

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

 

      <div className="register-options">
        <label className="agree">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          I agree to the <span className="highlight">Terms & Conditions</span>
        </label>
      </div>

      <button type="submit" className="register-btn">Register</button>

    </form>
 
    </div>
  );
};

export default RegisterForm;
