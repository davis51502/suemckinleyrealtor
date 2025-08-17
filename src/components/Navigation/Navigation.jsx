import React from 'react';
import { Search } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ activeTab, setActiveTab }) => (
  <nav className="app-nav">
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

export default Navigation;