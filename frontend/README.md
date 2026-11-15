# TerraTwin Frontend

React 18 + Vite 5 implementation of the **Twin Worlds** landing page and the ten-level **Guess the Planet** campaign.

- Cinematic single-page design: hero, worlds, fidelity, Mars and Moon analogues, comparison sliders, lookalikes, gallery and sources.
- Ten campaign levels of ten questions each, monochrome before the guess, server-authoritative scoring, star gating and local progress.
- All imagery is streamed from the backend's MongoDB GridFS buckets.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

See [frontend.md](./frontend.md) for the architecture, game rules and layout.
