import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import './Navigation.css';

const TABS = ['Home', 'About Sue', 'Featured Properties', 'Buyers Seller Resources', 'Testimonials', 'Contact'];

const Navigation = ({ activeTab, setActiveTab }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSelect = (tab) => {
    setActiveTab(tab);
    setMenuOpen(false);
  };

  return (
    <nav className="app-nav" aria-label="Main navigation">
      <div className="container nav-content">
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
          <span>Menu</span>
        </button>

        <div id="nav-links" className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => handleSelect(tab)}
              className={`nav-button ${activeTab === tab ? 'active' : ''}`}
              aria-current={activeTab === tab ? 'page' : undefined}
            >
              {tab}
            </button>
          ))}
        </div>

        <a className="nav-phone" href="tel:925-413-2866">
          <Phone size={16} />
          <span>925.413.2866</span>
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
