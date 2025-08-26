import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    '/House1608.jpg',
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
      {/* Hero Carousel */}
      <div className="hero-section">
        <img 
          src={images[currentImageIndex]}
          alt={`Property ${currentImageIndex + 1}`}
          className="carousel-image"
        />
        <button className="carousel-arrow left" onClick={handlePrevious}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <button className="carousel-arrow right" onClick={handleNext}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
            viewBox="0 0 24 24" fill="none" stroke="currentColor" 
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>
          {/* ✅ Testimonial Section */}
      <div className="testimonial-section">
        <div className="testimonial-video">
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/7eRzRbfGA2E"
              title="Client Testimonials"
              frameBorder="1"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3 className="video-heading">Video Testimonials</h3>
          </div>
        </div>

        <div className="testimonial-quote">
          <span className="quote-icon">“</span>
          <p>
            Sue, you are a true Real Estate professional. The entire experience can
            be so overwhelming and you guided us through every step of the way from
            selling our home, believing in us and our vision for a new home and all
            the transaction details in between. Your experience and expertise in the
            field is outstanding and your patience is commendable.
          </p>
          <p className="client-name">– Stacey &amp; Jack Walker</p>
          <span className="quote-icon closing">”</span>
        </div>
      </div>
      
      {/* Welcome Section */}
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
