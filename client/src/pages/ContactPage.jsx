import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import '../styles/ContactPage.css';
import { FaInstagram, FaTwitter, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    feedback: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    setFormData({ name: '', email: '', phone: '', feedback: '' });
  };

  return (
    <>
      <Navbar />
      <div className="contact-hero">
        <h1>Let's Get in Touch</h1>
        <p>We’re here to answer any questions or feedback you may have.</p>
      </div>

 {/* Contact Form */}
 <div className="container">
  <h2 className='heading'> Contact Us</h2>
<div className="contact-form-area">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name  <span>*</span></label>
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Email  <span>*</span></label>
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Phone </label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </div>

          <div className="input-group">
            <label>Feedback  <span>*</span> </label>
            <textarea name="feedback" required value={formData.feedback} onChange={handleChange} className='feedback'></textarea>
          </div>

          <button className="contact-submit-btn" type="submit">Send Message</button>
        </form>
      </div>

      <div className="contact-container">
        {/* Left Info Section */}
        <div className="contact-left">
          <h2>Contact Information</h2>
          <p><strong>Location:</strong> Dadri, India</p>
          <p><strong>Phone:</strong> +91-9876543210</p>
          <p><strong>Email:</strong> contact@yourcompany.com</p>
          <p><strong>Support Hours:</strong> Mon-Sat, 10 AM - 6 PM</p>
          
          {/* Social Icons */}
          <div className="social-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="contact-map">
          <iframe
            title="Dadri Map"
            src="https://www.google.com/maps?q=Dadri,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: '12px' }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

 </div>
      
     

      <Footer />
    </>
  );
};

export default ContactPage;
