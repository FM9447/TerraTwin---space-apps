# TerraTwin - Node.js Backend Service ⚙️🛰️

The **TerraTwin Backend** is a high-performance scientific Node.js / Express engine designed to ingest 100% NASA planetary and Earth observation datasets, compute multi-criteria scientific similarity scores, perform cross-planetary visual photo matching, and serve a 10-level campaign built from 100 questions.

---

## 🏛️ Core Features & Capabilities

1. **100% NASA Scientific Dataset Catalog**:
   - Ingests and processes data from **NASA LP DAAC** (NASADEM, MODIS LST, ASTER GED), **NASA GES DISC** (GPM IMERG), **NASA SEDAC** (GPWv4), and **NASA PDS Geosciences** (LRO LOLA/Diviner, MRO HiRISE/CRISM, MGS MOLA).
2. **Parametric Scientific Discovery Engine (PRD Section 8)**:
   - Calculates scientific similarity using weighted normalized dimensions ($S_{overall} = \frac{\sum w_i S_i}{\sum w_i}$).
   - Generates independent trio of metrics: **Similarity Score**, **Data Coverage %**, and **Data Confidence %**.
3. **Cross-Planetary Visual Photo Matcher**:
   - Multi-dimensional visual feature extraction (edge density, texture roughness, albedo, crater/volcanic morphology).
   - Searches cross-planetary database for matching Earth, Moon, and Mars imagery.
4. **Cosmic Detective Campaign Engine**:
   - Serves a 10-level campaign (10 questions each) from a 100-question bank: 48 Earth analogs, 28 lunar features, 24 martian features. Every question is used once, every level mixes all three worlds, and difficulty ramps from level 1 to level 10.
   - Level payloads are sanitized: the answer is never sent to the client until a guess is verified.
   - Game photography is stored in a **GridFS bucket (`gameimages`)** inside MongoDB and streamed by the API with immutable caching, so no external image host is contacted at runtime.
   - Scoring is authoritative on the server: tier base points, −20 per extra clue (first clue free), and a +20% per-streak bonus capped at 2×.

---

## 📂 Directory Layout

```text
backend/
├── src/
│   ├── db/
│   │   ├── connection.js         # Mongoose connection manager
│   │   └── seed.js               # Database seeder (GridFS images + 100 questions, targets, analogs)
│   ├── models/
│   │   ├── Analog.js             # Mongoose schema with GeoJSON 2dsphere index
│   │   ├── PlanetaryTarget.js    # Moon & Mars reference targets schema
│   │   ├── GameLevel.js          # B&W reconnaissance question schema (image_id → GridFS)
│   │   └── NasaDataset.js        # 100% NASA dataset catalog schema
│   ├── data/
│   │   ├── gameCatalog.js        # Canonical 100-question export + validation
│   │   └── levels/
│   │       ├── novice.js         # Levels 1–25
│   │       ├── explorer.js       # Levels 26–50
│   │       ├── specialist.js     # Levels 51–75
│   │       └── commander.js      # Levels 76–100
│   ├── controllers/
│   │   └── gameController.js     # Campaign builder, sanitized questions, scoring, GridFS
│   ├── nasaDataCatalog.js        # 100% NASA datasets, Moon/Mars targets, Earth analogs
│   ├── similarityEngine.js       # PRD Section 8 hybrid similarity scoring engine
│   ├── imageSimilarityEngine.js  # Feature 2 visual & morphological photo matcher
│   ├── gameLogic.js              # Public/reveal payloads + scoring rules
│   └── gameLevelsData.js         # Re-export of the canonical catalog
├── scripts/
│   ├── fetchGameImages.js        # One-time Wikimedia Commons ingest into .cache/game-images
│   └── contactSheet.ps1          # Visual QA contact sheets (Windows PowerShell)
├── docker-compose.yml            # MongoDB 7 + named volume terratwin-mongo-data
├── server.js                     # Express REST API routes & CORS configuration
├── .env.example                  # Environment configuration template
├── package.json                  # Node.js dependencies (express, mongoose, dotenv)
└── backend.md                    # Backend documentation
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service status, database status, indexed analogs, game levels and stored images |
| `GET` | `/api/nasa-datasets` | Full catalog of verified 100% NASA datasets from MongoDB with DOIs |
| `GET` | `/api/targets` | Candidate lunar base targets (Artemis, Shackleton) and Martian exploration sites |
| `GET` | `/api/mission-profiles` | 4 PRD mission profiles (Permanent Base, Robotic Landing, Surface Exploration, Habitability) |
| `POST` | `/api/analog/search` | Computes scientific similarity from user input criteria sliders & returns ranked Earth analogs with side-by-side imagery |
| `GET` | `/api/analog/nearby` | **MongoDB Geospatial (`$near`)**: Finds Earth analogs near given `lat`/`lon` within `maxDistanceKm` |
| `POST` | `/api/analog/within-polygon` | **MongoDB Geospatial (`$geoWithin`)**: Finds Earth analogs inside a custom drawn polygon |
| `POST` | `/api/analog/image-match` | Finds morphologically similar Earth, Moon, and Mars imagery from an input photo |
| `GET` | `/api/game/campaign` | 10 levels × 10 sanitized questions, ramped and mixed |
| `GET` | `/api/game/levels` | Sanitized level list with difficulty filtering (`novice`, `explorer`, `specialist`, `commander`) |
| `GET` | `/api/game/levels/:n` | One sanitized level |
| `GET` | `/api/game/image/:n` | Streams the level photo from the GridFS `gameimages` bucket |
| `POST` | `/api/game/guess` | Authoritatively scores a guess and returns the reveal payload |
| `GET` | `/api/game/stats` | Level and stored-image counts |
| `GET` | `/api/assets/:key` | Streams editorial imagery from the GridFS `siteassets` bucket |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (tested on Node.js v22)
- `npm`
- Docker Desktop (the project ships a MongoDB 7 Docker Compose service)

### Installation & Run

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start MongoDB 7 (creates the named volume terratwin-mongo-data)
npm run db:up

# First run only: download the 100 game photos into backend/.cache/game-images
npm run fetch:images

# Upload the photos into GridFS and seed all collections
npm run seed

# Start development server with auto-reload
npm run dev

# Or start production server
npm start
```

Default server runs on `http://localhost:8000`.

Useful maintenance commands:

```bash
npm run seed:reset   # drops the GridFS bucket and re-uploads every image
npm run db:down      # stops the MongoDB container (data stays in the volume)
npm test             # runs the Node test suite (catalog, scoring, payload-leak checks)
```
