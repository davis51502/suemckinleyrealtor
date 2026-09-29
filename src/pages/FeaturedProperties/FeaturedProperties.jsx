import React, { useEffect, useState } from 'react';
import { BedDouble, Bath, Ruler, MapPin, X } from 'lucide-react';
import './FeaturedProperties.css';

// To add a listing, add an entry here. `status` is one of: sold, available, pending.
const properties = [
  {
    id: 'mohr',
    address: '3693 Mohr Ave',
    location: 'Pleasanton, CA',
    price: '$3,250,000',
    status: 'sold',
    statusLabel: 'SOLD',
    image: '/mohr ft.jpg',
    beds: '4 Beds',
    baths: '3 Baths',
    sqft: '2,850 sq ft',
    description: 'Beautiful modern home in desirable Pleasanton neighborhood. Features open floor plan and luxury finishes.',
    features: ['Gourmet Kitchen', 'Hardwood Floors', 'Three-Car Garage'],
    details: (
      <>
        <p><strong>Price:</strong> $3,250,000 (SOLD)</p>
        <p><strong>Details:</strong> 4 Beds | 3 Baths | 2,850 sq ft</p>
        <p><strong>Year Built:</strong> 2019</p>
        <p>This beautiful modern home in a desirable Pleasanton neighborhood features an open floor plan, gourmet kitchen, and luxurious finishes throughout. The property includes hardwood floors, a two-car garage, and professionally landscaped yard.</p>
        <p><strong>Features:</strong> Gourmet Kitchen, Hardwood Floors, Two-Car Garage, Landscaped Yard, Master Suite, Updated Bathrooms</p>
      </>
    )
  },
  {
    id: 'oak',
    address: '1247 Oak Street',
    location: 'San Ramon, CA',
    price: '$2,890,000',
    status: 'available',
    statusLabel: 'FOR SALE',
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: '5 Beds',
    baths: '4 Baths',
    sqft: '3,200 sq ft',
    description: 'Elegant family home with spacious rooms and premium upgrades. Perfect for entertaining.',
    features: ['Swimming Pool', 'Wine Cellar', 'Home Office'],
    details: (
      <>
        <p><strong>Price:</strong> $2,890,000</p>
        <p><strong>Details:</strong> 5 Beds | 4 Baths | 3,200 sq ft</p>
        <p>Elegant family home with spacious rooms and premium upgrades. Perfect for entertaining with a large backyard and modern amenities.</p>
      </>
    )
  },
  {
    id: 'vineyard',
    address: '892 Vineyard Lane',
    location: 'Livermore, CA',
    price: '$1,950,000',
    status: 'pending',
    statusLabel: 'PENDING',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    beds: '3 Beds',
    baths: '2 Baths',
    sqft: '2,100 sq ft',
    description: 'Contemporary home with vineyard views and luxury finishes. Open concept design.',
    features: ['Vineyard Views', 'Smart Home', 'Energy Efficient'],
    details: (
      <>
        <p><strong>Price:</strong> $1,950,000 (PENDING)</p>
        <p><strong>Details:</strong> 3 Beds | 2 Baths | 2,100 sq ft</p>
        <p>Contemporary home with vineyard views and luxury finishes. Features an open concept design perfect for modern living.</p>
      </>
    )
  }
];

const FeaturedProperties = () => {
  const [selected, setSelected] = useState(null);

  // Close the details dialog with the Escape key
  useEffect(() => {
    if (!selected) return undefined;
    const onKey = (e) => e.key === 'Escape' && setSelected(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected]);

  return (
    <div className="page container">
      <div className="page-intro">
        <span className="eyebrow">Listings</span>
        <h1 className="page-title">Featured Properties</h1>
        <p className="page-lead">Discover our current featured listings and available properties</p>
      </div>

      <div className="properties-grid">
        {properties.map((property) => (
          <article className="property-card card" key={property.id}>
            <div className="property-image-wrap">
              <img src={property.image} alt={property.address} className="property-image" />
              <span className={`property-status status-${property.status}`}>{property.statusLabel}</span>
            </div>
            <div className="property-info">
              <p className="property-price">{property.price}</p>
              <h3 className="property-address">{property.address}</h3>
              <p className="property-location"><MapPin size={15} /> {property.location}</p>

              <div className="property-details">
                <span><BedDouble size={17} /> {property.beds}</span>
                <span><Bath size={17} /> {property.baths}</span>
                <span><Ruler size={17} /> {property.sqft}</span>
              </div>

              <p className="property-description">{property.description}</p>

              <div className="features-list">
                {property.features.map((f) => (
                  <span className="feature-tag" key={f}>{f}</span>
                ))}
              </div>

              <button className="btn btn-outline view-details-btn" onClick={() => setSelected(property)}>
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

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
            <img src={selected.image} alt={selected.address} className="modal-image" />
            <div className="modal-body">
              <h2 id="modal-title">{selected.address}, {selected.location}</h2>
              {selected.details}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;
