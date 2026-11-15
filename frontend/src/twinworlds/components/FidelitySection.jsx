import React from 'react';
import { FIDELITY_ICONS, FIDELITY_PILLARS, REALITY_ITEMS } from '../content';

export default function FidelitySection() {
  return (
    <section className="section fidelity" id="fidelity">
      <div className="ghost" aria-hidden="true">02</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />FIDELITY INDEX · 02 — HOW CLOSE IS “CLOSE”?</p>
        <h2 className="section__title">How close is <span className="grad grad--ice">“close”?</span></h2>
        <p className="section__lede">Scientists grade an analogue on four things. A site can be a near-perfect match on one and a poor one on another.</p>
      </div>

      <div className="fidelity__grid">
        {FIDELITY_PILLARS.map(pillar => (
          <article className="pillar reveal tilt" key={pillar.num}>
            <div className="card-shine" aria-hidden="true" />
            <span className="pillar__num">{pillar.num}</span>
            <svg className="pillar__icon" viewBox="0 0 24 24" aria-hidden="true">
              {FIDELITY_ICONS[pillar.icon]}
            </svg>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
            <span className="pillar__bar"><i style={{ '--p': pillar.percent }} /></span>
          </article>
        ))}
      </div>

      <div className="reality reveal">
        <div className="reality__intro">
          <span className="eyebrow">⚠ Reality check</span>
          <h3>What Earth always gives away</h3>
          <p>Every analogue shares one problem: it is still Earth. These four differences are what make the real thing so hard.</p>
        </div>
        <ul className="reality__list">
          {REALITY_ITEMS.map(([title, text]) => (
            <li key={title}><span>{title}</span> {text}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
