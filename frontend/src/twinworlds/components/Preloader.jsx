import React, { useEffect, useRef, useState } from 'react';

export default function Preloader() {
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let value = 0;
    let finishTimer = null;
    const finish = () => {
      setDone(true);
      document.body.classList.add('is-loaded');
    };

    const tick = setInterval(() => {
      value = Math.min(100, value + Math.random() * 22 + 6);
      setPct(Math.floor(value));
      if (value >= 100) {
        clearInterval(tick);
        finishTimer = setTimeout(finish, 350);
      }
    }, 140);

    const safety = setTimeout(finish, 3500);

    return () => {
      clearInterval(tick);
      clearTimeout(safety);
      if (finishTimer) clearTimeout(finishTimer);
    };
  }, []);

  return (
    <div className={`loader${done ? ' is-done' : ''}`} aria-hidden="true">
      <div className="loader__core">
        <div className="loader__rings"><span /><span /><span /></div>
        <div className="loader__word">TWIN&nbsp;WORLDS</div>
        <div className="loader__bar"><span style={{ width: `${pct}%` }} /></div>
        <div className="loader__pct">{String(pct).padStart(2, '0')}%</div>
      </div>
    </div>
  );
}

export function CursorLayer() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!finePointer || reduceMotion || !dot || !ring) return undefined;

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let raf = null;

    const move = e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };

    const over = event => {
      const target = event.target instanceof Element
        ? event.target.closest('a, button, .gallery__item, [data-compare]')
        : null;
      if (target) ring.classList.add('is-hover');
    };
    const out = event => {
      const target = event.target instanceof Element
        ? event.target.closest('a, button, .gallery__item, [data-compare]')
        : null;
      if (target) ring.classList.remove('is-hover');
    };

    window.addEventListener('pointermove', move, { passive: true });
    document.addEventListener('pointerover', over);
    document.addEventListener('pointerout', out);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('pointermove', move);
      document.removeEventListener('pointerover', over);
      document.removeEventListener('pointerout', out);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} aria-hidden="true" />
      <div className="cursor-ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
