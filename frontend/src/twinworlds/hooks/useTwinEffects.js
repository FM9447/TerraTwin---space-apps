import { useEffect } from 'react';

const FINE_POINTER = '(hover: hover) and (pointer: fine)';
const REDUCE_MOTION = '(prefers-reduced-motion: reduce)';

/**
 * Faithful port of the prototype's global behaviours: scroll progress,
 * scroll-spy, magnetic buttons, 3D tilt, reveal-on-scroll and the
 * gravity/pillar bars. Runs once after the page (all sections) mounts.
 */
export function useTwinEffects(rootRef) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const reduceMotion = window.matchMedia(REDUCE_MOTION).matches;
    const finePointer = window.matchMedia(FINE_POINTER).matches;

    const progressBar = root.querySelector('#progressBar');
    const toTop = root.querySelector('#toTop');

    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (toTop) toTop.classList.toggle('is-show', window.scrollY > 700);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    const scrollTop = () =>
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    toTop?.addEventListener('click', scrollTop);

    /* Scroll-spy -------------------------------------------------- */
    const spyLinks = [...root.querySelectorAll('[data-spy]')];
    const spySections = spyLinks
      .map(a => root.querySelector(`#${a.dataset.spy}`))
      .filter(Boolean);

    let spy = null;
    if ('IntersectionObserver' in window && spySections.length) {
      spy = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          spyLinks.forEach(a =>
            a.classList.toggle('is-active', a.dataset.spy === entry.target.id)
          );
        });
      }, { rootMargin: '-40% 0px -55% 0px' });
      spySections.forEach(section => spy.observe(section));
    }

    /* Magnetic buttons -------------------------------------------- */
    const cleanupMagnetic = [];
    const bindMagnetic = () => {
      if (!finePointer || reduceMotion) return;
      root.querySelectorAll('.magnetic').forEach(el => {
        if (el.dataset.magneticBound) return;
        el.dataset.magneticBound = '1';
        const move = e => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          el.style.transform = `translate(${x * 0.18}px, ${y * 0.22}px) scale(1.03)`;
        };
        const leave = () => { el.style.transform = ''; };
        el.addEventListener('pointermove', move);
        el.addEventListener('pointerleave', leave);
        cleanupMagnetic.push(() => {
          el.removeEventListener('pointermove', move);
          el.removeEventListener('pointerleave', leave);
        });
      });
    };

    /* 3D tilt ------------------------------------------------------ */
    const cleanupTilt = [];
    const bindTilt = () => {
      if (!finePointer || reduceMotion) return;
      root.querySelectorAll('.tilt').forEach(card => {
        if (card.dataset.tiltBound) return;
        card.dataset.tiltBound = '1';
        let raf = null;
        const move = e => {
          const r = card.getBoundingClientRect();
          const px = (e.clientX - r.left) / r.width - 0.5;
          const py = (e.clientY - r.top) / r.height - 0.5;
          if (raf) cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => {
            card.style.transform = `perspective(900px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateY(-5px)`;
          });
        };
        const leave = () => {
          if (raf) cancelAnimationFrame(raf);
          card.style.transform = '';
        };
        card.addEventListener('pointermove', move);
        card.addEventListener('pointerleave', leave);
        cleanupTilt.push(() => {
          card.removeEventListener('pointermove', move);
          card.removeEventListener('pointerleave', leave);
        });
      });
    };

    bindMagnetic();
    bindTilt();

    /* Views inside the game mount later; bind their buttons too. */
    const mutationObserver = new MutationObserver(() => {
      bindMagnetic();
      bindTilt();
    });
    mutationObserver.observe(root, { childList: true, subtree: true });

    /* Reveal on scroll -------------------------------------------- */
    const revealEls = [...root.querySelectorAll('.reveal')];
    let revealObserver = null;

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealEls.forEach(el => el.classList.add('is-visible'));
    } else {
      revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -8% 0px' });
      revealEls.forEach(el => revealObserver.observe(el));
    }

    /* Gravity bars ------------------------------------------------ */
    let gravityObserver = null;
    const gravity = root.querySelector('.gravity');
    if (gravity) {
      if ('IntersectionObserver' in window) {
        gravityObserver = new IntersectionObserver((entries, obs) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gravity.classList.add('is-visible');
              obs.disconnect();
            }
          });
        }, { threshold: 0.35 });
        gravityObserver.observe(gravity);
      } else {
        gravity.classList.add('is-visible');
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      toTop?.removeEventListener('click', scrollTop);
      spy?.disconnect();
      revealObserver?.disconnect();
      gravityObserver?.disconnect();
      cleanupMagnetic.forEach(fn => fn());
      cleanupTilt.forEach(fn => fn());
      mutationObserver.disconnect();
    };
  }, [rootRef]);
}
