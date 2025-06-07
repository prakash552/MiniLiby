import React from 'react';
import '../styles/About.css';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="about-container">
       
      </div>
     
    <div className="about-page">
      <h1 className="about-heading">About Us 📖</h1>

      <div className="about-content">
        <p>Welcome to Book World! We are passionate about connecting readers with their next favorite story. Our mission is to provide a luxurious online experience for every book lover.</p>

        <p>From Fiction to Science, from History to Mystery — we have it all at the best prices. Discover, explore, and enjoy a new journey with every page you turn.</p>

        <p>Thank you for trusting us. Happy Reading! 📚✨</p>
      </div>
    </div>
     <Footer />
    </>
  );
}

export default About;
