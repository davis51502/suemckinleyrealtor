import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Phone, Mail, ZoomIn } from 'lucide-react';
import soldHomes from './soldHomes';

// How many photos show before "View all" (two rows on desktop, three on phones).
// Keep it a multiple of 6 so rows stay even at both 3 and 2 across.
const INITIAL_COUNT = 6;

const SoldGallery = () => {
  // Index of the photo open in the viewer, or null when it's closed
  const [openIndex, setOpenIndex] = useState(null);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef(null);
  const count = soldHomes.length;
  const visible = expanded ? soldHomes : soldHomes.slice(0, INITIAL_COUNT);

  const toggleExpanded = () => {
    // Collapsing removes rows above the button, so bring the gallery back into view
    if (expanded) sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setExpanded((e) => !e);
  };

  const show = (step) => setOpenIndex((i) => (i + step + count) % count);

  // Keyboard controls + stop the page behind from scrolling while the viewer is open
  useEffect(() => {
    if (openIndex === null) return undefined;
    const onKey = (e) => {
      if (e.key === 'Escape') setOpenIndex(null);
      if (e.key === 'ArrowRight') setOpenIndex((i) => (i + 1) % count);
      if (e.key === 'ArrowLeft') setOpenIndex((i) => (i - 1 + count) % count);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [openIndex, count]);

  const current = openIndex !== null ? soldHomes[openIndex] : null;

  return (
    <section className="sold-section" aria-labelledby="sold-title" ref={sectionRef}>
      <div className="page-intro">
        <span className="eyebrow">Track Record</span>
        <h2 id="sold-title" className="page-title">Homes Sue Has Sold</h2>
        <p className="page-lead">
          A few of the many homes Sue has helped her clients buy and sell. Tap any photo to see it larger.
        </p>
      </div>

      <div className="sold-grid" id="sold-grid">
        {visible.map((home, i) => (
          <button
            key={home.file}
            type="button"
            className={`sold-tile ${i >= INITIAL_COUNT ? 'is-new' : ''}`}
            onClick={() => setOpenIndex(i)}
          >
            <img
              src={`/sold-homes/thumb/${home.file}`}
              alt={home.alt}
              width={home.width}
              height={home.height}
              loading="lazy"
              decoding="async"
            />
            <span className="sold-tile-overlay" aria-hidden="true"><ZoomIn size={22} /></span>
          </button>
        ))}
      </div>

      <div className="sold-more">
        <button
          type="button"
          className="btn btn-outline"
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-controls="sold-grid"
        >
          {expanded ? 'Show fewer' : `View all ${count} homes`}
        </button>
      </div>

      {/* Closing call-to-action with Sue's SOLD! card */}
      <div className="sold-cta card">
        <img
          src="/brand/sue-sold-card.jpg"
          alt="Sue McKinley's SOLD! card: REALTOR®, 925.413.2866, suemckinleyrealtor@gmail.com, CA DRE Lic# 00871712"
          className="sold-cta-image"
          width="720"
          height="747"
          loading="lazy"
        />
        <div className="sold-cta-body">
          <span className="eyebrow">Your Home Could Be Next</span>
          <h3>Thinking about selling?</h3>
          <p>
            Sue has been helping families buy and sell homes across the Tri-Valley and greater Bay Area since 1984.
            Give her a call or send an email to talk about your home.
          </p>
          <div className="sold-cta-actions">
            <a className="btn btn-primary" href="tel:925-413-2866">
              <Phone size={18} /> Call Sue
            </a>
            <a className="btn btn-outline" href="mailto:suemckinleyrealtor@gmail.com">
              <Mail size={18} /> Email Sue
            </a>
          </div>
        </div>
      </div>

      {current && (
        <div className="viewer" role="dialog" aria-modal="true" aria-label="Sold homes photo viewer" onClick={() => setOpenIndex(null)}>
          <button type="button" className="viewer-close" onClick={() => setOpenIndex(null)} aria-label="Close">
            <X size={24} />
          </button>
          <button
            type="button"
            className="viewer-arrow left"
            onClick={(e) => { e.stopPropagation(); show(-1); }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>
          <figure className="viewer-figure" onClick={(e) => e.stopPropagation()}>
            <img src={`/sold-homes/full/${current.file}`} alt={current.alt} />
            <figcaption>{openIndex + 1} / {count}</figcaption>
          </figure>
          <button
            type="button"
            className="viewer-arrow right"
            onClick={(e) => { e.stopPropagation(); show(1); }}
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </section>
  );
};

export default SoldGallery;
