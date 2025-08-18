import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    '/1.jpg',
    '/2.jpg',
    '/3.jpg',
    '/4.jpg',
    '/5.jpg',
    '/6.jpg'
  ];

  const handlePrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="home-page">
      <div className="hero-section">
        <img 
          src={images[currentImageIndex]}
          alt={`Property ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-arrow left" onClick={handlePrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="carousel-arrow right" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      
      <div className="content-container">
      <div className="welcome-section">
        <div>
          <h1>From Your First Home to Your Dream Home</h1>
          <p>
            With years of experience in the Bay Area real estate market, I'm committed to helping you
            navigate your real estate journey. Whether you're buying or selling, I provide personalized service and expert guidance
            every step of the way.
          </p>
          <button className="cta-button">
            Get Started Today
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;