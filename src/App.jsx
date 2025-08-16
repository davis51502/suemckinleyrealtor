import React, { useState } from 'react';
import { Search } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const Header = () => (
    // This <header> is now full-width
    <header className="app-header">
      {/* This <div> centers the content inside the header */}
      <div className="content-container header-content">
        <div className="logo-section">
          <span className="logo-script">Sue</span>
          <span className="logo-main">McKinley Realtor</span>
        </div>
        <div className="contact-section">
          <div className="contact-details">
            <div>Sue McKinley Realtor®</div>
            <div>Phone 925-413-2866</div>
            <div>SueMcKinleyRealtor@gmail.com</div>
          </div>
          <img
            src="https://placehold.co/64x64/E2D0B8/333?text=Sue"
            alt="Sue McKinley"
            className="contact-photo"
            onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/64x64/E2D0B8/333?text=Sue'; }}
          />
        </div>
      </div>
    </header>
  );

  const Navigation = () => (
    // This <nav> is now full-width
    <nav className="app-nav">
       {/* This <div> centers the nav links and search bar */}
      <div className="content-container nav-content">
        <div className="nav-links">
          {['Home', 'About Sue', 'Featured Properties', 'Buyers Seller Resources', 'Testimonials', 'Blog', 'Contact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="search-container">
          <input type="text" placeholder="Search..." className="search-input" />
          <Search size={20} />
        </div>
      </div>
    </nav>
  );

  const HomePage = () => (
    <div className="home-page">
      {/* This hero section is already full-width, no changes needed here */}
      <div className="hero-section">
        <button className="carousel-arrow">
          <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="carousel-arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
        </button>
      </div>
      
      {/* Wrap the welcome section in the container to keep it centered */}
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

  const PlaceholderPage = ({ title }) => (
    // Also wrap placeholder pages in the container
    <div className="content-container">
        <div className="placeholder-page">
          <h1>{title}</h1>
          <p>This page is under construction.</p>
        </div>
    </div>
  );

  const renderPage = () => {
    // ... no changes needed in this function
    switch (activeTab) {
      case 'Home':
        return <HomePage />;
      case 'About Sue':
        return <PlaceholderPage title="About Sue" />;
      case 'Featured Properties':
        return <PlaceholderPage title="Featured Properties" />;
      case 'Buyers Seller Resources':
        return <PlaceholderPage title="Buyers & Seller Resources" />;
      case 'Testimonials':
        return <PlaceholderPage title="Testimonials" />;
      case 'Blog':
        return <PlaceholderPage title="Blog" />;
      case 'Contact':
        return <PlaceholderPage title="Contact" />;
      default:
        return <HomePage />;
    }
  };

  return (
    // The main div no longer needs a class
    <div>
      <Header />
      <Navigation />
      <main>
        {renderPage()}
      </main>
      <footer className="app-footer">
        <div className="content-container">
          <p>© 2025 Sue McKinley Realtor®. All rights reserved.</p>
          <p>Licensed California Real Estate Professional</p>
        </div>
      </footer>
    </div>
  );
};

export default App;