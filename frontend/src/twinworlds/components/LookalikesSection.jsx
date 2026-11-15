import React from 'react';
import { assetUrl, LOOKALIKES } from '../content';

export default function LookalikesSection() {
  return (
    <section className="section lookalikes" id="lookalikes">
      <div className="ghost" aria-hidden="true">06</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />DOPPELGÄNGERS · 06 — PURE RESEMBLANCE</p>
        <h2 className="section__title">The <span className="grad grad--vice">lookalikes.</span></h2>
        <p className="section__lede">Not every “alien” landscape is a scientific analogue. These are chosen purely for the resemblance, and a few are a little artistic license.</p>
      </div>

      <div className="lookalikes__grid">
        {LOOKALIKES.map(look => (
          <article className="look reveal tilt" key={look.id}>
            <div className="card-shine" aria-hidden="true" />
            <div className="look__media">
              <img
                src={assetUrl(look.asset)}
                alt={look.alt}
                loading="lazy"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = assetUrl(look.twinPlanet === 'Mars' ? 'mars-disc' : 'moon-disc');
                }}
              />
              <span
                className="look__tag"
                style={{
                  borderColor: look.twinPlanet === 'Mars' ? 'rgba(235, 107, 74, 0.5)' : 'rgba(169, 185, 201, 0.5)',
                  color: look.twinPlanet === 'Mars' ? '#ff9a82' : '#d2e4f5'
                }}
              >
                {look.twinPlanet === 'Mars' ? '✦ MARS LOOKALIKE' : '◐ MOON LOOKALIKE'}
              </span>
            </div>
            <div className="look__body">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '0.5rem', marginBottom: '0.25rem' }}>
                <h3 style={{ margin: 0 }}>{look.title}</h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: 'var(--faint)',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap'
                }}>
                  {look.location}
                </span>
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--sun)',
                marginBottom: '0.45rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                lineHeight: 1.4
              }}>
                <span style={{ color: look.twinPlanet === 'Mars' ? 'var(--mars-hot)' : 'var(--moon)', fontWeight: 600 }}>↳ Mirrors:</span>
                <span>{look.twinFeature}</span>
              </div>
              <p style={{ fontSize: '0.84rem', lineHeight: 1.55, color: 'var(--muted)', margin: 0 }}>
                {look.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      <p className="lookalikes__note reveal">
        A scientific analogue is chosen for its geology, chemistry or mission value.
        A lookalike is chosen for its photograph.
      </p>
    </section>
  );
}
