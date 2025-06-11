import React, { useState } from 'react';
import './LoginForm.css'; // Assuming you have a CSS file for styling

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData({
      ...loginData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Validate & send to backend
    console.log('Login Data:', loginData);
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
