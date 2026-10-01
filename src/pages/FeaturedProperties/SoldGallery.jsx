import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Phone, Mail } from 'lucide-react';
import soldHomes from './soldHomes';

const SoldGallery = () => {
  // Index of the photo open in the viewer, or null when it's closed
  const [openIndex, setOpenIndex] = useState(null);
  const count = soldHomes.length;

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
    <section className="sold-section" aria-labelledby="sold-title">
      <div className="page-intro">
        <span className="eyebrow">Track Record</span>
        <h2 id="sold-title" className="page-title">Homes Sue Has Sold</h2>
        <p className="page-lead">
          A few of the many homes Sue has helped her clients buy and sell. Tap any photo to see it larger.
        </p>
      </div>

      <div className="sold-grid">
        {soldHomes.map((home, i) => (
          <button key={home.file} type="button" className="sold-tile" onClick={() => setOpenIndex(i)}>
            <img
              src={`/sold-homes/thumb/${home.file}`}
              alt={home.alt}
              width={home.width}
              height={home.height}
              loading="lazy"
              decoding="async"
            />
          </button>
        ))}
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
