import React from 'react';
import '../styles/Home.css'; // CSS file for Home component
import Navbar from '../Components/Navbar';
import SearchBar from '../Components/SearchBar';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import banner1 from '../assets/banner.jpg';
import banner2 from '../assets/banner1.jpg';
import banner3 from '../assets/banner2.jpg';
import banner4 from '../assets/banner3.jpg';
import banner5 from '../assets/banner4.jpg';
import BestSellingBooks from '../Components/BestSellingBooks';
import PincodeChecker from '../Components/PincodeChecker';
import WhyChooseUs from '../Components/WhyChooseUs';
import TestimonialSlider from '../Components/TestimonialSlider';
import Footer from '../Components/Footer';

const offerImages = [banner1, banner2, banner3, banner4, banner5];

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 2500,
  pauseOnHover: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  nextArrow: <button className="slick-next">Next</button>,
  prevArrow: <button className="slick-prev">Previous</button>,
};

function Home() {
  return (
    <>
      <Navbar />
      <SearchBar />
      <section className="offer-section">
        <div className="offer-banner">
          <Slider {...settings}>
            {offerImages.map((image, index) => (
              <div key={index} className="offer-slide">
                <img src={image} alt={`Offer ${index + 1}`} />
                <div className="offer-content">
                  <h2>📚 Mega Book Sale!</h2>
                  <p>Up to 50% off on Bestsellers & New Arrivals</p>
                  <button className="shop-btn">Shop Now</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <BestSellingBooks />
      <PincodeChecker />
      <WhyChooseUs />
      <TestimonialSlider />
      <Footer />
    </>
  );
}

export default Home;
