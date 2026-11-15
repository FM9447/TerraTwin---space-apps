import React, { useEffect, useRef, useState } from 'react';
import { assetUrl, GALLERY_FILTERS, GALLERY_ITEMS } from '../content';

const BLANK_IMG = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';

export default function GallerySection() {
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const gridRef = useRef(null);

  const isVisible = item => filter === 'all' || item.cat === filter;

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    requestAnimationFrame(() => {
      grid.querySelectorAll('.gallery__item').forEach(item => {
        if (item.hidden) return;
        item.animate(
          [
            { opacity: 0, transform: 'scale(0.94) rotate(0.5deg)' },
            { opacity: 1, transform: 'scale(1)' }
          ],
          { duration: 380, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' }
        );
      });
    });
  }, [filter]);

  useEffect(() => {
    document.body.style.overflow = lightbox ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  useEffect(() => {
    if (!lightbox) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') setLightbox(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return (
    <>
      <section className="section gallery" id="gallery">
        <div className="ghost" aria-hidden="true">07</div>

        <div className="section__head reveal">
          <p className="kicker"><span className="kicker__dot" />FIELD NOTES · 07 — SIGNAL ARCHIVE</p>
          <h2 className="section__title">Field <span className="grad grad--ice">notes.</span></h2>
          <p className="section__lede">A few frames from the three worlds. Filter by world, then click any to look closer.</p>
        </div>

        <div className="filters reveal" role="group" aria-label="Filter gallery by world">
          {GALLERY_FILTERS.map(btn => (
            <button
              className={`filter magnetic${filter === btn.id ? ' is-active' : ''}`}
              type="button"
              data-filter={btn.id}
              key={btn.id}
              onClick={() => setFilter(btn.id)}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="gallery__grid" id="galleryGrid" ref={gridRef}>
          {GALLERY_ITEMS.map(item => (
            <figure
              className={`gallery__item${item.size ? ` gallery__item--${item.size}` : ''} reveal`}
              data-cat={item.cat}
              data-caption={item.caption}
              key={item.id}
              hidden={!isVisible(item)}
              onClick={() => setLightbox(item)}
            >
              <img src={assetUrl(item.asset)} alt={item.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <div
        className="lightbox"
        hidden={!lightbox}
        onClick={e => { if (e.target === e.currentTarget) setLightbox(null); }}
      >
        <button className="lightbox__close" aria-label="Close" onClick={() => setLightbox(null)}>×</button>
        <img className="lightbox__img" src={lightbox ? assetUrl(lightbox.asset) : BLANK_IMG} alt={lightbox?.alt || ''} />
        <p className="lightbox__caption">{lightbox?.caption || ''}</p>
      </div>
    </>
  );
}
