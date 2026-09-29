import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Award, MapPin, Truck } from 'lucide-react';
import './Home.css';

// Slides 2-6 are 1920x384 panoramas (cropped to remove text baked into the old banners).
// The hero height in Home.css is capped at 384px so these are never scaled up.
const images = [
  '/hero/slide-1.jpg',
  '/hero/slide-2.jpg',
  '/hero/slide-3.jpg',
  '/hero/slide-4.jpg',
  '/hero/slide-5.jpg',
  '/hero/slide-6.jpg'
];

const highlights = [
  { icon: <Award size={22} />, title: 'REALTOR® Since 1984', text: 'Four decades of experience through every kind of market.' },
  { icon: <MapPin size={22} />, title: 'Tri-Valley Expert', text: 'Pleasanton, Dublin, Livermore, San Ramon, Danville & beyond.' },
  { icon: <Truck size={22} />, title: 'Relocation Specialist', text: 'Smooth moves for families coming to or leaving the Bay Area.' }
];

const Home = ({ onNavigate }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-advance the hero every 6 seconds; restarts whenever the slide changes.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((i) => (i + 1) % images.length);
    }, 6000);
    return () => clearTimeout(timer);
  }, [currentImageIndex]);

  const handlePrevious = () => {
    setCurrentImageIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  };

  const handleNext = () => {
    setCurrentImageIndex((i) => (i + 1) % images.length);
  };

  return (
    <div className="home-page">
      {/* Hero Carousel */}
      <section className="home-hero" aria-label="Featured homes">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`Featured home ${i + 1}`}
            className={`home-hero-image ${i === currentImageIndex ? 'visible' : ''}`}
          />
        ))}
        <button className="home-hero-arrow left" onClick={handlePrevious} aria-label="Previous photo">
          <ChevronLeft size={24} />
        </button>
        <button className="home-hero-arrow right" onClick={handleNext} aria-label="Next photo">
          <ChevronRight size={24} />
        </button>
        <div className="home-hero-dots">
          {images.map((src, i) => (
            <button
              key={src}
              className={`home-hero-dot ${i === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(i)}
              aria-label={`Show photo ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Welcome Section */}
      <section className="home-welcome container">
        <span className="eyebrow">Helping families on the move</span>
        <h1 className="page-title">From Your First Home to Your Dream Home</h1>
        <p className="page-lead">
          With years of experience in the Bay Area real estate market, I'm committed to helping you
          navigate your real estate journey. Whether you're buying or selling, I provide personalized service and expert guidance
          every step of the way.
        </p>
        <div className="home-cta-row">
          <button className="btn btn-primary" onClick={() => onNavigate('Contact')}>Get in Touch</button>
          <button className="btn btn-outline" onClick={() => onNavigate('About Sue')}>Meet Sue</button>
        </div>
      </section>

      {/* Highlights */}
      <section className="container">
        <div className="home-highlights">
          {highlights.map(({ icon, title, text }) => (
            <div className="home-highlight card" key={title}>
              <span className="home-highlight-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="home-testimonial">
        <div className="container home-testimonial-inner">
          <div className="home-video">
            <div className="home-video-frame">
              <iframe
                src="https://www.youtube.com/embed/7eRzRbfGA2E"
                title="Client Testimonials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3 className="home-video-heading">Video Testimonials</h3>
          </div>

          <figure className="home-quote">
            <span className="home-quote-mark" aria-hidden="true">“</span>
            <blockquote>
              Sue, you are a true Real Estate professional. The entire experience can
              be so overwhelming and you guided us through every step of the way from
              selling our home, believing in us and our vision for a new home and all
              the transaction details in between. Your experience and expertise in the
              field is outstanding and your patience is commendable.
            </blockquote>
            <figcaption>– Stacey &amp; Jack Walker</figcaption>
            <button className="home-quote-link" onClick={() => onNavigate('Testimonials')}>
              Read more client stories <ChevronRight size={16} />
            </button>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Home;
