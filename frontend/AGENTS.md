# 🌐 AGENTS.md — Frontend Directives

> **Scope**: `frontend/` directory  
> **Primary Stack**: React 18, Vite 5, the Twin Worlds CSS design system, Canvas 2D FX  
> **Theme Guidelines**: Deep space (`#030509` void, navy panels, brass `#d9a45b` signal accents, Earth/Mars/Moon hues)

---

## 🏛️ Architecture Rules

1. **Page Structure**:
   - `src/twinworlds/TwinWorldsPage.jsx` assembles the page in the original design order.
   - `src/twinworlds/components/` holds one component per section: `Hero`, `Nav`, `WorldsSection`, `FidelitySection`, `AnalogsSection`, `CompareSection`, `LookalikesSection`, `GallerySection`, `SourcesSection`, plus the preloader/FX layers.
   - `src/twinworlds/content.jsx` holds all copy and image keys. Keep markup free of hard-coded prose.
   - `src/twinworlds/hooks/useTwinEffects.js` owns the global behaviours (scroll progress, scroll-spy, magnetic buttons, tilt, reveal, gravity bars). Component-local effects own canvases and interactions.

2. **Design Parity**:
   - `/` is the **Twin Worlds** landing page. It must stay visually identical to `TerraTwin_UI/twin-worlds-main`: section order, class names, typography and spacing.
   - `src/styles/twinworlds.css` is a verbatim copy of the design stylesheet. Do not edit it; put campaign-specific additions in `src/styles/game.css`.
   - Tailwind is intentionally **not** installed: its preflight would shift the design.

3. **Game Invariants**:
   - **Ten levels × ten questions**: the backend builds the campaign; the client never groups answers itself.
   - **Monochrome before the guess**: `.game__stage img` must stay `grayscale(1)` until the server confirms a guess.
   - **Server-authoritative scoring**: never compute correctness or points on the client.
   - **Star gating**: 3★ / 2★ / 1★ / failed; at least one star unlocks the next level.
   - **Progress**: `localStorage` key `terratwin.game.progress.v2` stores `highestUnlocked`, per-level stars/best score and career totals.

4. **Media**:
   - All imagery is streamed from the backend (`/api/assets/:key`, `/api/game/image/:n`) and lives in MongoDB GridFS. Never add hotlinked images or `public/` photos.

5. **Accessibility & Cleanup**:
   - Keep the design's `aria-*` attributes. Comparison sliders support arrow keys, Home and End.
   - Every effect that adds listeners, observers, canvases or animation frames must clean up on unmount.

---

## 🧪 Verification Protocol

Before finishing any frontend task, run:
```bash
cd frontend
npm run build
```
Verify that Vite builds cleanly into `dist/` with zero module errors, and load the page in a browser to confirm the loader completes and the game reaches its level map.
