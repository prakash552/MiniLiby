import React, { useState, useEffect } from 'react';
import LoginForm from '../Components/LoginForm';
import RegisterForm from '../Components/RegisterForm';
import '../styles/AuthPage.css';
import bannerImage from '../assets/img.png';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  // ⏬ Optional: If already logged in, redirect to homepage or dashboard
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      // Redirect logic if already logged in
      // window.location.href = '/'; // or use navigate('/dashboard')
    }
  }, []);

  return (
    <div className="auth-container">
      {/* Left side banner */}
      <div className="auth-image-section">
        <img src={bannerImage} alt="Welcome" />
        <h2>Welcome to BookBasket</h2>
        <p>Login or Register to continue your book journey 📚</p>
      </div>

      {/* Right side form */}
      <div className="auth-form-section">
        <div className="auth-toggle">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        <div className="auth-form-wrapper">
          {isLogin ? (
            <>
              <LoginForm />
              <p className="auth-switch-text">
                Don't have an account?{" "}
                <span onClick={() => setIsLogin(false)} className='signup-link'>Register here</span>
              </p>
            </>
          ) : (
            <>
              <RegisterForm />
              <p className="auth-switch-text">
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login here</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
