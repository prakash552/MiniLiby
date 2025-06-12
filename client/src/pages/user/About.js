import React from 'react';
import Navbar from '../../Components/user/Navbar';
import Footer from '../../Components/user/Footer';
import '../../styles/user/About.css';

const About = () => {
  return (
    <>
      <Navbar />

      <div className="about-hero">
        <div className="hero-text">
          <h1>About BookBasket 📚</h1>
          <p>Your trusted destination for best-selling books with love & passion.</p>
        </div>
      </div>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At BookBasket, our mission is simple – to bring quality literature to your doorstep,
          inspire readers, and support authors around the world. From fiction to finance, self-help
          to spirituality — we deliver stories that matter.
        </p>
      </section>

      <div className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="cards">
          <div className="card">🚚 Fast & Reliable Delivery</div>
          <div className="card">📈 Best Sellers & Trending</div>
          <div className="card">🛒 Easy Returns</div>
          <div className="card">🎁 Exclusive Offers</div>
        </div>
      </div>

      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="/assets/team/prakash.jpg" alt="Prakash" />
            <h4>Prakash Mishra</h4>
            <p>Founder & Developer</p>
          </div>
        </div>
      </div>

      <div className="stats-section">
        <div className="stat-box">📚 1200+ Books</div>
        <div className="stat-box">🤝 10K+ Happy Customers</div>
        <div className="stat-box">🌍 25+ Cities Served</div>
      </div>

      <div className="about-cta">
        <h3>Have questions or feedback?</h3>
        <a href="/contact" className="contact-button">Contact Us ➜</a>
      </div>

      <Footer />
    </>
  );
};

export default About;
