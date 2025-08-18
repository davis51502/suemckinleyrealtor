import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="content-container">
    <div className="page-content">
      <h1>Contact Sue McKinley</h1>

      {/* Contact details from the image */}
      <div className="contact-details">
        <p><strong>REALTOR®</strong> Since 1984</p>
        <p>Allison James Estates and Homes</p>
        <p>Phone: <a href="tel:925-413-2866">925.413.2866</a></p>
        <p>CalBRE# 00871712</p>
      </div>
    </div>
  </div>
);

export default Contact;