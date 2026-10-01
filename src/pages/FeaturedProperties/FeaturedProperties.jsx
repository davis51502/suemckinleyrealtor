import React, { useEffect, useState } from 'react';
import { BedDouble, Bath, Ruler, MapPin, CalendarDays, X } from 'lucide-react';
import SoldGallery from './SoldGallery';
import './FeaturedProperties.css';

// Listings shown at the top of the page. To add one, copy a block and change the values.
// - status: 'available' (For Sale), 'pending' (Pending) or 'sold' (Sold)
// - image: put the photo in public/listings/ and use '/listings/your-photo.jpg'
// - yearBuilt and features are optional
const properties = [
  {
    id: 'mohr',
    address: '3693 Mohr Ave',
    city: 'Pleasanton, CA',
    price: '$3,250,000',
    status: 'sold',
    image: '/mohr ft.jpg',
    beds: 4,
    baths: 3,
    sqft: '2,850',
    yearBuilt: 2019,
    description: 'This beautiful modern home in a desirable Pleasanton neighborhood features an open floor plan, gourmet kitchen, and luxurious finishes throughout. The property includes hardwood floors, a two-car garage, and professionally landscaped yard.',
    features: ['Gourmet Kitchen', 'Hardwood Floors', 'Two-Car Garage', 'Landscaped Yard', 'Master Suite', 'Updated Bathrooms']
  }
];

const STATUS_LABELS = { available: 'For Sale', pending: 'Pending', sold: 'Sold' };

// Beds / baths / square feet row, used on the cards and in the details dialog
const Stats = ({ property }) => (
  <ul className="property-stats">
    <li><BedDouble size={16} /> {property.beds} bd</li>
    <li><Bath size={16} /> {property.baths} ba</li>
    <li><Ruler size={16} /> {property.sqft} sq ft</li>
  </ul>
);

const FeaturedProperties = () => {
  const [selected, setSelected] = useState(null);

  // Escape closes the details dialog; the page behind doesn't scroll while it's open
  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [selected]);

  return (
    <div className="page container">
      <div className="page-intro">
        <span className="eyebrow">Listings</span>
        <h1 className="page-title">Featured Properties</h1>
        <p className="page-lead">Featured homes from Sue, plus a look at properties she has sold over the years.</p>
      </div>

      {properties.length > 0 ? (
        <div className="properties-grid">
          {properties.map((property) => (
            <button
              key={property.id}
              type="button"
              className="property-card"
              onClick={() => setSelected(property)}
              aria-label={`${property.address}, ${property.city}: ${STATUS_LABELS[property.status]}, ${property.price}. View details`}
            >
              <div className="property-image-wrap">
                <img src={property.image} alt="" className="property-image" loading="lazy" />
                <span className={`property-status status-${property.status}`}>{STATUS_LABELS[property.status]}</span>
              </div>
              <div className="property-info">
                <p className="property-price">{property.price}</p>
                <h3 className="property-address">{property.address}</h3>
                <p className="property-location"><MapPin size={14} /> {property.city}</p>
                <Stats property={property} />
              </div>
            </button>
          ))}
        </div>
      ) : (
        <div className="listings-empty card">
          <h2>New listings coming soon</h2>
          <p>Looking to buy or sell? Sue would love to help you find the right home.</p>
          <a className="btn btn-primary" href="tel:925-413-2866">Call 925.413.2866</a>
        </div>
      )}

      <SoldGallery />

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={() => setSelected(null)} aria-label="Close">
              <X size={22} />
            </button>
            <div className="modal-image-wrap">
              <img src={selected.image} alt={`${selected.address}, ${selected.city}`} className="modal-image" />
              <span className={`property-status status-${selected.status}`}>{STATUS_LABELS[selected.status]}</span>
            </div>
            <div className="modal-body">
              <p className="property-price">{selected.price}</p>
              <h2 id="modal-title">{selected.address}</h2>
              <p className="property-location"><MapPin size={14} /> {selected.city}</p>
              <Stats property={selected} />
              {selected.yearBuilt && (
                <p className="modal-year"><CalendarDays size={16} /> Built in {selected.yearBuilt}</p>
              )}
              <p className="modal-description">{selected.description}</p>
              {selected.features?.length > 0 && (
                <>
                  <h3 className="modal-subhead">Features</h3>
                  <ul className="features-list">
                    {selected.features.map((f) => <li className="feature-tag" key={f}>{f}</li>)}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
