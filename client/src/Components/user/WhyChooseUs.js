// src/components/WhyChooseUs.jsx

import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Wide Range of Books",
      description: "Choose from a vast collection of genres, authors, and bestsellers.",
      icon: "📚",
    },
    {
      title: "Fast & Secure Delivery",
      description: "Get your favorite books delivered to your doorstep securely and quickly.",
      icon: "🚚",
    },
    {
      title: "Affordable Prices",
      description: "Enjoy unbeatable prices and regular discount offers.",
      icon: "💰",
    },
    {
      title: "Trusted by Readers",
      description: "Rated 4.9+ by thousands of happy readers across India.",
      icon: "🌟",
    },
  ];

  return (
    <section className="why-choose-section">
      <h2 className="why-title">Why Choose Us</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
