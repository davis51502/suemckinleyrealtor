import React from 'react';

const Home = () => (
  <div className="home-page">
    <div className="hero-section">
      <button className="carousel-arrow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
      </button>
      <button className="carousel-arrow">
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

export default Home;