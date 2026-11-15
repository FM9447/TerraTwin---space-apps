import React, { useCallback, useRef, useState } from 'react';
import { assetUrl, COMPARISONS } from '../content';

function CompareFrame({ item, index, position, setPosition }) {
  const frameRef = useRef(null);
  const dragging = useRef(false);

  const clamp = value => Math.max(0, Math.min(100, value));

  const setFromClientX = useCallback(clientX => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    setPosition(index, clamp(((clientX - rect.left) / rect.width) * 100));
  }, [index, setPosition]);

  const onPointerDown = e => {
    dragging.current = true;
    try { frameRef.current.setPointerCapture(e.pointerId); } catch { /* noop */ }
    setFromClientX(e.clientX);
  };

  const onPointerMove = e => {
    if (!dragging.current) return;
    setFromClientX(e.clientX);
  };

  const endDrag = e => {
    if (!dragging.current) return;
    dragging.current = false;
    try { frameRef.current.releasePointerCapture(e.pointerId); } catch { /* noop */ }
  };

  const onKeyDown = e => {
    const current = position;
    let next = current;
    if (e.key === 'ArrowLeft') next = current - 5;
    else if (e.key === 'ArrowRight') next = current + 5;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = 100;
    else return;
    e.preventDefault();
    setPosition(index, clamp(next));
  };

  return (
    <div className="compare__item reveal">
      <div
        className="compare__frame"
        data-compare
        style={{ '--pos': `${position}%` }}
        ref={frameRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <img className="compare__img" src={assetUrl(item.after)} alt={item.afterAlt} loading="lazy" draggable="false" />
        <div className="compare__before">
          <img className="compare__img" src={assetUrl(item.before)} alt={item.beforeAlt} loading="lazy" draggable="false" />
          <span className="compare__label compare__label--a">{item.labelA}</span>
        </div>
        <span className="compare__label compare__label--b">{item.labelB}</span>
        <button
          className="compare__handle"
          type="button"
          role="slider"
          aria-label={item.aria}
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow={Math.round(position)}
          aria-orientation="horizontal"
          onKeyDown={onKeyDown}
        >
          <span className="compare__grip" aria-hidden="true" />
        </button>
      </div>
      <p className="compare__caption">
        {item.caption} <span>{item.captionStrong}</span>
      </p>
    </div>
  );
}

export default function CompareSection() {
  const [positions, setPositions] = useState(() => COMPARISONS.map(() => 50));

  const setPosition = useCallback((index, value) => {
    setPositions(prev => prev.map((p, i) => (i === index ? value : p)));
  }, []);

  return (
    <section className="section compare" id="compare">
      <div className="ghost" aria-hidden="true">05</div>

      <div className="section__head reveal">
        <p className="kicker"><span className="kicker__dot" />TWIN SCANNER · 05 — DRAG TO SEE THE TWIN</p>
        <h2 className="section__title">Drag to see <span className="grad grad--hyper">the twin.</span></h2>
        <p className="section__lede">Slide between an Earth landscape and the world it stands in for. Same dust, different planet.</p>
      </div>

      <div className="compare__list">
        {COMPARISONS.map((item, index) => (
          <CompareFrame
            key={item.id}
            item={item}
            index={index}
            position={positions[index]}
            setPosition={setPosition}
          />
        ))}
      </div>
    </section>
  );
}
