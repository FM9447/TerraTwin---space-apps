# TerraTwin — Twin Worlds Frontend

The frontend is the **Twin Worlds** editorial experience plus the **Guess the Planet** campaign. It is a React 18 + Vite 5 app that renders a cinematic single-page design and a ten-level, server-scored game.

## Stack

- React 18, Vite 5
- Hand-written CSS design system (`src/styles/twinworlds.css`, copied verbatim from the Twin Worlds prototype)
- Canvas 2D starfield and stardust cursor
- No Tailwind, no Three.js, no icon library — the design supplies its own reset, type scale and glyphs

## Page map

| Anchor | Section | Component |
| :--- | :--- | :--- |
| `#top` | Hero, three orbs, stats, scroll cue | `Hero` |
| — | Ticker | `Ticker` |
| `#worlds` | Three worlds + gravity bars | `WorldsSection` |
| `#fidelity` | Four fidelity pillars + reality check | `FidelitySection` |
| `#mars` | Six Mars analogues | `AnalogsSection` |
| `#moon` | Six Moon analogues (horizontal strip) | `AnalogsSection` |
| `#compare` | Three drag-to-compare sliders | `CompareSection` |
| `#lookalikes` | Six visual lookalikes | `LookalikesSection` |
| `#gallery` | 16-frame filterable gallery + lightbox | `GallerySection` |
| `#game` | Campaign: briefing → map → run → result | `game/GameSection` |
| `#sources` | Source catalogue | `SourcesSection` |

Global chrome: `Preloader`, `CursorLayer`, `FxLayers`, `Nav`, `Footer`, `ToTop`.

## Effects

`src/twinworlds/hooks/useTwinEffects.js` wires the prototype behaviours once after mount:

- scroll progress bar and back-to-top
- scroll-spy for the nav
- magnetic buttons and 3D tilt cards
- reveal-on-scroll observer
- gravity bar activation

Canvas work lives in `FxLayers` (warp starfield reacting to scroll velocity, stardust trail). The hero splits its title declaratively and adds depth-weighted orb parallax. All listeners, observers and animation frames are cleaned up on unmount.

## Campaign

The client never sees the answers. `GET /api/game/campaign` returns ten levels of ten sanitized questions; `POST /api/game/guess` returns correctness, points and the reveal.

- **Difficulty ramp**: the backend takes the 100-question bank, sorts each world by tier, and deals ten questions per level so level 1 is easiest and level 10 is hardest.
- **Mixed worlds**: every level contains Earth, Mars and the Moon; question order is shuffled with no three identical worlds in a row.
- **Monochrome rule**: `.game__stage img` is `grayscale(1)` until the guess is confirmed, then transitions to true colour.
- **Clues**: four NASA clue cards unlock sequentially. The first is free; each further clue costs 20 points.
- **Scoring**: base points by tier (100 / 150 / 200 / 300), a +20% streak bonus per consecutive correct answer (capped at 2×), and clue penalties. All scored by the server.
- **Stars**: computed from the clean score (base minus clue penalties) against the level maximum — 3★ ≥ 85%, 2★ ≥ 65%, 1★ ≥ 45%, otherwise failed. One star unlocks the next level.
- **Progress**: `localStorage` key `terratwin.game.progress.v2` stores `highestUnlocked`, `levels[levelNumber] = { stars, bestScore, bestCorrect, cleared, attempts }`, and career totals. The briefing offers “Resume level N”.

## Media

Every image comes from the backend:

- `/api/assets/:key` — editorial imagery (GridFS bucket `siteassets`)
- `/api/game/image/:n` — campaign frames (GridFS bucket `gameimages`)

`VITE_API_BASE` can point the app at a different API host; the Vite dev server proxies `/api` to `http://localhost:8000` by default.

## Running

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production bundle
```

The backend must be seeded (`npm run fetch:images`, `npm run fetch:assets`, `npm run seed`).

## Layout

```text
src/
├── twinworlds/
│   ├── TwinWorldsPage.jsx     # section assembly
│   ├── content.jsx            # copy + image keys
│   ├── components/            # one component per section
│   ├── hooks/useTwinEffects.js
│   └── game/                  # GameSection, API, progress, stars
├── styles/
│   ├── twinworlds.css         # verbatim design stylesheet
│   └── game.css               # campaign console additions
├── App.jsx
└── main.jsx
```
