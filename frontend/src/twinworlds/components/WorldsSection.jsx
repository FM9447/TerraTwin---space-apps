import React from 'react';
import { assetUrl, GRAVITY_BARS, WORLDS } from '../content';

export default function WorldsSection() {
  return (
    <section className="section worlds" id="worlds">
      <div className="ghost" aria-hidden="true">01</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />SYSTEM MAP · 01 — THE WORLDS</p>
        <h2 className="section__title">Three worlds, <span className="grad grad--fire">one neighbourhood.</span></h2>
        <p className="section__lede">The same rock and dust, spun at different scales. Here are the numbers that separate them.</p>
      </div>

      <div className="worlds__grid">
        {WORLDS.map(world => (
          <article
            className={`world ${world.className} reveal tilt`}
            style={{ '--planet': world.planet }}
            key={world.id}
          >
            <div className="card-shine" aria-hidden="true" />
            <div className="world__top">
              <img className="world__img" src={assetUrl(world.asset)} alt={world.alt} loading="lazy" />
              <span className="world__tag">{world.tag}</span>
              <span className="world__index">{world.index}</span>
            </div>
            <h3 className="world__name">{world.name}</h3>
            <p className="world__desc">{world.desc}</p>
            <dl className="world__stats">
              {world.stats.map(([dt, dd]) => (
                <div key={dt}><dt>{dt}</dt><dd>{dd}</dd></div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <div className="gravity reveal" aria-label="Surface gravity compared with Earth">
        <div className="gravity__head">
          <span>◉ Surface gravity</span>
          <span className="mono">relative to Earth</span>
        </div>
        {GRAVITY_BARS.map(bar => (
          <div
            className="gravity__row"
            style={{ '--w': bar.width, '--planet': bar.planet, '--d': bar.delay }}
            key={bar.name}
          >
            <span className="gravity__name">{bar.name}</span>
            <span className="gravity__track">
              <span className="gravity__fill" />
              <span className="gravity__spark" />
            </span>
            <span className="gravity__val">{bar.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
