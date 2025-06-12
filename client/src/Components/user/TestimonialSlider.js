// src/components/TestimonialSlider.jsx

import React from 'react';
import Slider from 'react-slick';
import './TestimonialSlider.css'; // Assuming you have a CSS file for styling


const testimonials = [
  {
    name: 'Aarav Sharma',
    image: '/assets/user1.jpg',
    rating: 5,
    feedback: 'The quality of the books is amazing. Delivery was super fast!',
  },
  {
    name: 'Neha Verma',
    image: '/assets/user2.jpg',
    rating: 4,
    feedback: 'Great selection and easy to navigate. Highly recommended!',
  },
  {
    name: 'Rajat Kumar',
    image: '/assets/user3.jpg',
    rating: 5,
    feedback: 'Loved the UI and got amazing discounts!',
  },
  {
    name: 'Ishita Singh',
    image: '/assets/user4.jpg',
    rating: 3,
    feedback: 'Nice collection, but delivery was a little slow.',
  },
  {
    name: 'Yash Gupta',
    image: '/assets/user5.jpg',
    rating: 4,
    feedback: 'Amazing experience! Will shop again.',
  },
  {
    name: 'Pooja Mishra',
    image: '/assets/user6.jpg',
    rating: 5,
    feedback: 'Loved the packaging and books were in great condition.',
  },
  {
    name: 'Ravi Chauhan',
    image: '/assets/user7.jpg',
    rating: 5,
    feedback: 'Affordable prices and great customer service.',
  },
  {
    name: 'Divya Nair',
    image: '/assets/user8.jpg',
    rating: 4,
    feedback: 'Easy to use website and checkout process.',
  },
  {
    name: 'Aditya Mehra',
    image: '/assets/user9.jpg',
    rating: 5,
    feedback: 'Awesome platform for book lovers.',
  },
  {
    name: 'Simran Kaur',
    image: '/assets/user10.jpg',
    rating: 5,
    feedback: 'Highly satisfied with the experience!',
  },
];

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="testimonial-slider">
      <h2 className="slider-title">❤️ What Our Readers Say</h2>
      <Slider {...settings}>
        {testimonials.map((user, index) => (
          <div key={index} className="testimonial-card">
            <img src={user.image} alt={user.name} className="user-img" />
            <h4>{user.name}</h4>
            <p className="stars">
              {'★'.repeat(user.rating)}
              {'☆'.repeat(5 - user.rating)}
            </p>
            <p className="feedback">"{user.feedback}"</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;
