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
              <img src={assetUrl(look.asset)} alt={look.alt} loading="lazy" />
              <span className="look__tag">✦ Visual lookalike</span>
            </div>
            <div className="look__body">
              <h3>{look.title}</h3>
              <p>{look.meta}</p>
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
