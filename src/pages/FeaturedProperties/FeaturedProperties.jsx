import React, { useState } from 'react';
import './FeaturedProperties.css';

const FeaturedProperties = () => {
  const [selectedModal, setSelectedModal] = useState(null);

  const openModal = (modalId) => {
    setSelectedModal(modalId);
  };

  const closeModal = () => {
    setSelectedModal(null);
  };

  return (
    <div className="content-container">
      <div className="page-header">
        <h1>Featured Properties</h1>
        <p>Discover our current featured listings and available properties</p>
      </div>

      <div className="properties-grid">
        {/* Property 1 - Mohr Ave */}
        <div className="property-card">
          <img 
            src="/mohr ft.jpg" 
            alt="3693 Mohr Ave" 
            className="property-image"
          />
          <div className="property-info">
            <h3 className="property-address">3693 Mohr Ave</h3>
            <p className="property-location">Pleasanton, CA</p>
            <p className="property-price">$3,250,000</p>
            <span className="property-status status-sold">SOLD</span>
            
            <div className="property-details">
              <span>4 Beds</span>
              <span>3 Baths</span>
              <span>2,850 sq ft</span>
            </div>
            
            <p className="property-description">
              Beautiful modern home in desirable Pleasanton neighborhood. Features open floor plan and luxury finishes.
            </p>
            
            <div className="property-features">
              <div className="features-list">
                <span className="feature-tag">Gourmet Kitchen</span>
                <span className="feature-tag">Hardwood Floors</span>
                <span className="feature-tag">Three-Car Garage</span>
              </div>
            </div>
            
            <button className="view-details-btn" onClick={() => openModal('modal1')}>
              View Details
            </button>
          </div>
        </div>

        {/* Property 2 */}
        <div className="property-card">
          <img 
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="1247 Oak Street" 
            className="property-image"
          />
          <div className="property-info">
            <h3 className="property-address">1247 Oak Street</h3>
            <p className="property-location">San Ramon, CA</p>
            <p className="property-price">$2,890,000</p>
            <span className="property-status status-available">FOR SALE</span>
            
            <div className="property-details">
              <span>5 Beds</span>
              <span>4 Baths</span>
              <span>3,200 sq ft</span>
            </div>
            
            <p className="property-description">
              Elegant family home with spacious rooms and premium upgrades. Perfect for entertaining.
            </p>
            
            <div className="property-features">
              <div className="features-list">
                <span className="feature-tag">Swimming Pool</span>
                <span className="feature-tag">Wine Cellar</span>
                <span className="feature-tag">Home Office</span>
              </div>
            </div>
            
            <button className="view-details-btn" onClick={() => openModal('modal2')}>
              View Details
            </button>
          </div>
        </div>

        {/* Property 3 */}
        <div className="property-card">
          <img 
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="892 Vineyard Lane" 
            className="property-image"
          />
          <div className="property-info">
            <h3 className="property-address">892 Vineyard Lane</h3>
            <p className="property-location">Livermore, CA</p>
            <p className="property-price">$1,950,000</p>
            <span className="property-status status-pending">PENDING</span>
            
            <div className="property-details">
              <span>3 Beds</span>
              <span>2 Baths</span>
              <span>2,100 sq ft</span>
            </div>
            
            <p className="property-description">
              Contemporary home with vineyard views and luxury finishes. Open concept design.
            </p>
            
            <div className="property-features">
              <div className="features-list">
                <span className="feature-tag">Vineyard Views</span>
                <span className="feature-tag">Smart Home</span>
                <span className="feature-tag">Energy Efficient</span>
              </div>
            </div>
            
            <button className="view-details-btn" onClick={() => openModal('modal3')}>
              View Details
            </button>
          </div>
        </div>
      </div>

      {/* Modal 1 */}
      {selectedModal === 'modal1' && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>3693 Mohr Ave, Pleasanton, CA</h2>
            <p><strong>Price:</strong> $3,250,000 (SOLD)</p>
            <p><strong>Details:</strong> 4 Beds | 3 Baths | 2,850 sq ft</p>
            <p><strong>Year Built:</strong> 2019</p>
            <br />
            <p>This beautiful modern home in a desirable Pleasanton neighborhood features an open floor plan, gourmet kitchen, and luxurious finishes throughout. The property includes hardwood floors, a two-car garage, and professionally landscaped yard.</p>
            <br />
            <p><strong>Features:</strong> Gourmet Kitchen, Hardwood Floors, Two-Car Garage, Landscaped Yard, Master Suite, Updated Bathrooms</p>
          </div>
        </div>
      )}

      {/* Modal 2 */}
      {selectedModal === 'modal2' && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>1247 Oak Street, San Ramon, CA</h2>
            <p><strong>Price:</strong> $2,890,000</p>
            <p><strong>Details:</strong> 5 Beds | 4 Baths | 3,200 sq ft</p>
            <br />
            <p>Elegant family home with spacious rooms and premium upgrades. Perfect for entertaining with a large backyard and modern amenities.</p>
          </div>
        </div>
      )}

      {/* Modal 3 */}
      {selectedModal === 'modal3' && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-btn" onClick={closeModal}>&times;</span>
            <h2>892 Vineyard Lane, Livermore, CA</h2>
            <p><strong>Price:</strong> $1,950,000 (PENDING)</p>
            <p><strong>Details:</strong> 3 Beds | 2 Baths | 2,100 sq ft</p>
            <br />
            <p>Contemporary home with vineyard views and luxury finishes. Features an open concept design perfect for modern living.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeaturedProperties;