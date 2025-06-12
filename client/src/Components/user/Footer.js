import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <h2>BookNest 📚</h2>
          <p>Your one-stop destination for all your favorite books.</p>
        </div>

        <div className="footer-center">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>Email: support@booknest.com</p>
          <p>Phone: +91 9876543210</p>
          <p>Address: New Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} BookNest. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
