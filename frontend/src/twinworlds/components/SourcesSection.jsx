import React from 'react';
import { SOURCES } from '../content';

export default function SourcesSection() {
  return (
    <section className="section sources" id="sources">
      <div className="ghost" aria-hidden="true">09</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />DEEP ARCHIVE · 09 — KEEP GOING</p>
        <h2 className="section__title">Go <span className="grad grad--fire">deeper.</span></h2>
        <p className="section__lede">The sites, catalogues and imagery behind this page, for anyone who wants to keep reading.</p>
      </div>

      <div className="sources__grid">
        {SOURCES.map(source => (
          <a
            className="source reveal tilt"
            href={source.href}
            target="_blank"
            rel="noopener"
            key={source.name}
          >
            <div className="card-shine" aria-hidden="true" />
            <span className="source__type">{source.type}</span>
            <span className="source__name">{source.name}</span>
            <span className="source__desc">{source.desc}</span>
          </a>
        ))}
      </div>

      <p className="sources__note reveal">
        Imagery: NASA and Wikimedia Commons contributors. Figures and site notes: ESA, NASA
        and Wikipedia. Content is educational, not mission advice.
      </p>
    </section>
  );
}
