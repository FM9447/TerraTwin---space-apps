import React, { useEffect, useRef } from 'react';

const PALETTE = ['#e8edf5', '#cfe0f5', '#f4e3c2', '#d9d4e8', '#ffffff'];
const TRAIL_COLORS = ['#f4e3c2', '#cfe0f5', '#e8b07e', '#d9d4e8', '#ffffff'];

function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

    let stars = [];
    let rafId = null;
    let pointerX = 0;
    let pointerY = 0;
    let easedX = 0;
    let easedY = 0;
    let width = 0;
    let height = 0;
    let warp = 1;
    let warpTarget = 1;
    let lastScroll = window.scrollY;

    const buildStars = () => {
      const count = Math.min(420, Math.floor((width * height) / 4200));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.6 + 0.3,
        base: Math.random() * 0.6 + 0.25,
        tw: Math.random() * 2 + 0.4,
        phase: Math.random() * Math.PI * 2,
        depth: Math.random() * 0.85 + 0.15,
        speed: Math.random() * 8 + 2,
        color: PALETTE[Math.floor(Math.random() * PALETTE.length)],
        streak: Math.random() < 0.18
      }));
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      for (const s of stars) {
        ctx.globalAlpha = s.base;
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    };

    const draw = time => {
      const t = time / 1000;
      warp += (warpTarget - warp) * 0.06;
      warpTarget += (1 - warpTarget) * 0.02;
      easedX += (pointerX - easedX) * 0.04;
      easedY += (pointerY - easedY) * 0.04;

      ctx.clearRect(0, 0, width, height);

      for (const s of stars) {
        const fall = t * s.speed * s.depth * warp;
        const y = (s.y + fall * 4) % height;
        const px = s.x + easedX * 40 * s.depth;
        const py = y + easedY * 22 * s.depth;
        const alpha = Math.max(0.05, s.base * (0.62 + 0.38 * Math.sin(t * s.tw + s.phase)));
        ctx.globalAlpha = alpha;
        ctx.fillStyle = s.color;
        if (s.streak && warp > 1.6) {
          const len = Math.min(60, (warp - 1) * 14 * s.depth);
          ctx.fillRect(px, py, s.r * 0.7, len);
        } else {
          ctx.beginPath();
          ctx.arc(px, py, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    };

    const start = () => {
      resize();
      if (reduceMotion) {
        drawStatic();
        return;
      }
      rafId = requestAnimationFrame(draw);
    };

    const onResize = () => {
      cancelAnimationFrame(rafId);
      resize();
      if (reduceMotion) drawStatic();
      else rafId = requestAnimationFrame(draw);
    };

    let scrollTick = false;
    const onScroll = () => {
      if (scrollTick) return;
      scrollTick = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const v = Math.abs(y - lastScroll);
        lastScroll = y;
        if (v > 4) warpTarget = Math.min(7, 1 + v / 22);
        scrollTick = false;
      });
    };

    const onPointer = e => {
      pointerX = e.clientX / window.innerWidth - 0.5;
      pointerY = e.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    if (finePointer && !reduceMotion) {
      window.addEventListener('pointermove', onPointer, { passive: true });
    }

    start();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointer);
    };
  }, []);

  return <canvas id="stars" ref={canvasRef} aria-hidden="true" />;
}

function StardustTrail() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const trail = canvasRef.current;
    if (!trail) return undefined;
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!finePointer || reduceMotion) return undefined;

    const tctx = trail.getContext('2d');
    let particles = [];
    let tw = 0;
    let th = 0;
    let raf = null;

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      tw = window.innerWidth;
      th = window.innerHeight;
      trail.width = tw * dpr;
      trail.height = th * dpr;
      trail.style.width = `${tw}px`;
      trail.style.height = `${th}px`;
      tctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    size();
    window.addEventListener('resize', size);

    let lastPX = 0;
    let lastPY = 0;
    const move = e => {
      const dx = e.clientX - lastPX;
      const dy = e.clientY - lastPY;
      const dist = Math.hypot(dx, dy);
      lastPX = e.clientX;
      lastPY = e.clientY;
      if (dist < 3 || particles.length > 220) return;
      particles.push({
        x: e.clientX,
        y: e.clientY,
        vx: -dx * 0.02 + (Math.random() - 0.5) * 1.2,
        vy: -dy * 0.02 + (Math.random() - 0.5) * 1.2,
        life: 1,
        decay: 0.02 + Math.random() * 0.03,
        r: Math.random() * 2.4 + 0.8,
        color: TRAIL_COLORS[Math.floor(Math.random() * TRAIL_COLORS.length)]
      });
    };
    window.addEventListener('pointermove', move, { passive: true });

    const loop = () => {
      tctx.clearRect(0, 0, tw, th);
      tctx.globalCompositeOperation = 'lighter';
      particles = particles.filter(p => p.life > 0);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.96;
        p.vy *= 0.96;
        p.life -= p.decay;
        tctx.globalAlpha = Math.max(0, p.life) * 0.9;
        tctx.fillStyle = p.color;
        tctx.shadowBlur = 14;
        tctx.shadowColor = p.color;
        tctx.beginPath();
        tctx.arc(p.x, p.y, p.r * p.life + 0.4, 0, Math.PI * 2);
        tctx.fill();
      }
      tctx.shadowBlur = 0;
      tctx.globalAlpha = 1;
      tctx.globalCompositeOperation = 'source-over';
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', size);
      window.removeEventListener('pointermove', move);
    };
  }, []);

  return <canvas id="trail" ref={canvasRef} aria-hidden="true" />;
}

export default function FxLayers() {
  return (
    <>
      <div className="progress" aria-hidden="true"><span id="progressBar" /></div>
      <Starfield />
      <StardustTrail />
      <div className="nebula" aria-hidden="true" />
      <div className="aurora" aria-hidden="true"><span className="a1" /><span className="a2" /><span className="a3" /><span className="a4" /></div>
      <div className="grid-overlay" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />
    </>
  );
}
