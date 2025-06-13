import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Step 1: Import useNavigate
import './RegisterForm.css';

const RegisterForm = () => {
  const navigate = useNavigate(); // ✅ Step 2: Initialize navigate
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

    if (!formData.agree) {
      alert("Please accept the Terms & Conditions.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);

        if (data.message === "User registered successfully!") {
          navigate('/login'); // ✅ Step 3: Redirect to Login Page
        }

        setFormData({
          name: '',
          email: '',
          phone: '',
          password: '',
          confirmPassword: '',
          agree: false,
        });
      })
      .catch((err) => {
        alert('Registration failed');
        console.error(err);
      });
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
