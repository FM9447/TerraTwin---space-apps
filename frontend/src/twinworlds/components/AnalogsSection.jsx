import React from 'react';
import { assetUrl } from '../content';

export default function AnalogsSection({
  id,
  ghost,
  kickerClass = '',
  kicker,
  title,
  lede,
  sites,
  strip = false,
  pills,
  pillsLabel = 'Also used',
  pillsAria
}) {
  const cards = sites.map(site => (
    <article
      className="card card--site reveal tilt"
      data-planet={site.planet}
      key={site.id}
    >
      <div className="card-shine" aria-hidden="true" />
      <div className="card__media">
        <img src={assetUrl(site.asset)} alt={site.alt} loading="lazy" />
        <span className="card__planet">{site.planetLabel}</span>
        <span className="card__coord">{site.coord}</span>
      </div>
      <div className="card__body">
        <div className="card__meta">
          <span className="card__country">{site.country}</span>
          <span className="card__type">{site.type}</span>
        </div>
        <h3 className="card__title">{site.title}</h3>
        <p className="card__text">{site.text}</p>
        <p className="card__reality"><b>Reality check</b> {site.reality}</p>
        <p className="card__source">{site.source}</p>
      </div>
    </article>
  ));

  return (
    <section className={`section analogs${strip ? ' analogs--strip' : ''}`} id={id}>
      <div className="ghost" aria-hidden="true">{ghost}</div>

      <div className="section__head reveal">
        <p className={`kicker ${kickerClass}`.trim()}><span className="kicker__dot" />{kicker}</p>
        <h2 className="section__title">{title}</h2>
        <p className="section__lede">{lede}</p>
      </div>

      {strip ? (
        <div className="strip" tabIndex={0} aria-label="Moon analogue locations, scroll sideways">
          {cards}
        </div>
      ) : (
        <div className="analogs__grid">{cards}</div>
      )}

      {pills?.length ? (
        <div className="pills reveal" aria-label={pillsAria}>
          <span className="pills__label">{pillsLabel}</span>
          {pills.map(pill => <span className="pill" key={pill}>{pill}</span>)}
        </div>
      ) : null}
    </section>
  );
}
