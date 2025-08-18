import React from 'react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="app-nav">
    <div className="content-container nav-content">
      <div className="nav-links">
        {['Home', 'About Sue', 'Featured Properties', 'Buyers Seller Resources', 'Testimonials', 'Contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`nav-button ${activeTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>

    </div>
  </nav>
);

export default Navigation;