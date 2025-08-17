import React from 'react';
import './Header.css';

const Header = () => (
  <header className="app-header">
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

export default Header;