import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/Home/Home';
import AboutSue from './pages/AboutSue/AboutSue';
import FeaturedProperties from './pages/FeaturedProperties/FeaturedProperties';
import BuyersSellerResources from './pages/BuyersSellerResources/BuyersSellerResources';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/Contact';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  // Switching tabs replaces the page content, so jump back to the top like a real page load.
  const navigate = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <Home onNavigate={navigate} />;
      case 'About Sue':
        return <AboutSue />;
      case 'Featured Properties':
        return <FeaturedProperties />;
      case 'Buyers Seller Resources':
        return <BuyersSellerResources />;
      case 'Testimonials':
        return <Testimonials />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <>
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={navigate} />

      <main className="app-main">
        {renderPage()}
      </main>

      <footer className="app-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-name">Sue McKinley, REALTOR®</p>
            <p>Allison James Estates &amp; Homes</p>
            <p>CA DRE# 00871712</p>
          </div>
          <div className="footer-contact">
            <a href="tel:925-413-2866">925.413.2866</a>
            <a className="footer-email" href="mailto:suemckinleyrealtor@gmail.com">suemckinleyrealtor@gmail.com</a>
            <p>Serving the Tri-Valley &amp; greater Bay Area since 1984</p>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© {new Date().getFullYear()} Sue McKinley Realtor®. All rights reserved.</p>
          <p>Licensed California Real Estate Professional</p>
        </div>
      </footer>
    </>
  );
};

export default App;
