import React, { useEffect, useRef } from 'react';
import { assetUrl, HERO_ORBS, HERO_STATS } from '../content';
import Counter from './Counter';

const HERO_WORDS = 'Other worlds are closer than you think.'.split(' ');

export default function Hero() {
  const orbsRef = useRef(null);

  useEffect(() => {
    const orbs = orbsRef.current;
    if (!orbs) return undefined;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return undefined;

    const move = e => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      orbs.style.transform = `translate3d(${nx * 14}px, ${ny * 10}px, 0)`;
      orbs.querySelectorAll('.orb').forEach(o => {
        const d = Number(o.dataset.depth || 1);
        o.style.translate = `${nx * 16 * d}px ${ny * 12 * d}px`;
      });
    };

    window.addEventListener('pointermove', move, { passive: true });
    return () => window.removeEventListener('pointermove', move);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__bgword" aria-hidden="true"><span>TWIN WORLDS • TWIN WORLDS • TWIN WORLDS</span></div>
      <div className="hero__beams" aria-hidden="true"><span /><span /><span /></div>

      <div className="hero__copy">
        <p className="hero__badge reveal">
          <span className="pulse-dot" />EARTH&nbsp;&nbsp;·&nbsp;&nbsp;MARS&nbsp;&nbsp;·&nbsp;&nbsp;MOON
          <span className="hero__badge-glow" />
        </p>

        <h1 className="hero__title is-split" aria-label={HERO_WORDS.join(' ')}>
          {HERO_WORDS.map((word, i) => {
            const clean = word.toLowerCase().replace(/[^a-z]/g, '');
            return (
              <React.Fragment key={`${word}-${i}`}>
                <span
                  className={`word${clean === 'closer' ? ' word-hl' : ''}`}
                  style={{ '--i': i }}
                >
                  {word}
                </span>
                {i < HERO_WORDS.length - 1 ? ' ' : ''}
              </React.Fragment>
            );
          })}
        </h1>

        <p className="hero__sub">
          Deserts, craters and lava fields on Earth mirror Mars and the Moon so closely
          that astronauts train for space without leaving the ground.
        </p>

        <div className="hero__actions">
          <a className="btn btn--solid magnetic" href="#worlds"><span className="btn__flare" />Explore the worlds ↓</a>
          <a className="btn btn--brass magnetic" href="#game"><span className="btn__flare" />Guess the planet ✦</a>
        </div>

        <div className="hero__meta">
          {HERO_STATS.map(stat => (
            <div className="hero__stat" key={stat.count}>
              <Counter to={stat.count} />
              <span>{stat.label}</span>
            </div>
          ))}
          <div className="hero__stat hero__stat--live">
            <b>◉</b><span>live starfield<br />warp on scroll</span>
          </div>
        </div>
      </div>

      <div className="hero__orbs" aria-hidden="true" ref={orbsRef}>
        <div className="hero__halo" />
        {HERO_ORBS.map(orb => (
          <div className={`orb orb--${orb.key}`} data-depth={orb.depth} key={orb.key}>
            <span className="orb__glow" />
            <span className="orb__ring r1" />
            {orb.ring2 ? <span className="orb__ring r2" /> : null}
            <img src={assetUrl(orb.asset)} alt="" loading="eager" />
            <span className="orb__label">
              {orb.name}<span className="orb__stat">{orb.gravity}</span>
            </span>
            {orb.sat ? <span className={`orb__sat ${orb.sat}`} /> : null}
          </div>
        ))}
        <div className="hero__chip chip--a">◉ SOL 1147 · GALE CRATER −63°C</div>
        <div className="hero__chip chip--b">✦ SIGNAL LOCK · DSN 34M</div>
        <div className="hero__chip chip--c">▲ 384,400 KM · LUNAR RANGE</div>
      </div>

      <a className="hero__scroll" href="#worlds" aria-label="Scroll to explore">
        <span>Scroll</span>
        <span className="hero__scroll-line" aria-hidden="true" />
      </a>
    </section>
  );
}
