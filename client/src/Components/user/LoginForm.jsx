import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      if (data.token) {
        // ✅ Store token and full user object
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        alert('Login successful!');
        navigate('/'); // 👈 Redirect to homepage or dashboard
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong during login');
    }
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label>Email or Mobile Number</label>
      <input
        type="text"
        name="identifier"
        placeholder="Enter Email or Mobile"
        value={loginData.identifier}
        onChange={handleChange}
        required
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={loginData.password}
        onChange={handleChange}
        required
      />

      <div className="login-options">
        <label className="remember">
          <input
            type="checkbox"
            name="rememberMe"
            checked={loginData.rememberMe}
            onChange={handleChange}
          />
          Remember Me
        </label>
        <span className="forgot-password">Forgot Password?</span>
      </div>

      <button type="submit" className="login-btn">Login</button>

      <div className="login-extra-info">
        <p>Or login with:</p>
        <div className="social-icons">
          <i className="fa fa-google"></i>
          <i className="fa fa-facebook"></i>
          <i className="fa fa-twitter"></i>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
