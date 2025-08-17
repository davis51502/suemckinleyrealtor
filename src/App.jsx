import React, { useState } from 'react';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './pages/home/Home';
import AboutSue from './pages/AboutSue/AboutSue';
import FeaturedProperties from './pages/FeaturedProperties/FeaturedProperties';
import BuyersSellerResources from './pages/BuyersSellerResources/BuyersSellerResources';
import Testimonials from './pages/Testimonials/Testimonials';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const renderPage = () => {
    switch (activeTab) {
      case 'Home':
        return <Home />;
      case 'About Sue':
        return <AboutSue />;
      case 'Featured Properties':
        return <FeaturedProperties />;
      case 'Buyers Seller Resources':
        return <BuyersSellerResources />;
      case 'Testimonials':
        return <Testimonials />;
      case 'Blog':
        return <Blog />;
      case 'Contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div>
      <Header />
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
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