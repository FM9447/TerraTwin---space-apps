import React, { useEffect, useState } from 'react';
import { NAV_LINKS } from '../content';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`} id="nav">
      <a className="nav__brand" href="#top" aria-label="Twin Worlds, back to top">
        <span className="nav__mark" aria-hidden="true"><span className="nav__orbit" /></span>
        <span className="nav__name">TWIN&nbsp;WORLDS</span>
        <span className="nav__live"><i />LIVE&nbsp;ORBIT</span>
      </a>

      <nav
        className="nav__links"
        id="navLinks"
        aria-label="Primary"
      >
        {NAV_LINKS.map(link => (
          <a
            key={link.id}
            href={`#${link.id}`}
            data-spy={link.id}
            onClick={() => setOpen(false)}
          >
            <em>{link.num}</em>{link.label}
          </a>
        ))}
      </nav>

      <a className="btn btn--ghost nav__cta magnetic" href="#game" onClick={() => setOpen(false)}>
        <span className="btn__flare" />Play ↗
      </a>

      <button
        className="nav__toggle"
        id="navToggle"
        aria-expanded={open}
        aria-controls="navLinks"
        aria-label="Toggle menu"
        onClick={() => setOpen(v => !v)}
        type="button"
      >
        <span /><span /><span />
      </button>
    </header>
  );
}
