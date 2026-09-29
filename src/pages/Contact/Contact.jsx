import React from 'react';
import { Phone, Building2, BadgeCheck, MapPin } from 'lucide-react';
import './Contact.css';

const Contact = () => (
  <div className="page container">
    <div className="page-intro">
      <span className="eyebrow">Let's Talk</span>
      <h1 className="page-title">Contact Sue McKinley</h1>
      <p className="page-lead">Thinking about buying or selling? Give Sue a call. She'd love to help you with your next move.</p>
    </div>

    <div className="contact-card card">
      <div className="contact-call">
        <p className="contact-call-label">Call or text</p>
        <a className="contact-phone" href="tel:925-413-2866">925.413.2866</a>
        <a className="btn btn-primary" href="tel:925-413-2866">
          <Phone size={18} /> Call Sue
        </a>
      </div>

      <ul className="contact-details">
        <li>
          <BadgeCheck size={20} />
          <span><strong>REALTOR®</strong> Since 1984</span>
        </li>
        <li>
          <Building2 size={20} />
          <span>Allison James Estates and Homes</span>
        </li>
        <li>
          <MapPin size={20} />
          <span>Serving the Tri-Valley &amp; greater Bay Area</span>
        </li>
        <li>
          <BadgeCheck size={20} />
          <span>CA DRE# 00871712</span>
        </li>
      </ul>
    </div>
  </div>
);

export default Contact;
