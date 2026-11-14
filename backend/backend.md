# TerraTwin - Node.js Backend Service ⚙️🛰️

The **TerraTwin Backend** is a high-performance scientific Node.js / Express engine designed to ingest 100% NASA planetary and Earth observation datasets, compute multi-criteria scientific similarity scores, perform cross-planetary visual photo matching, and serve 100 educational game levels.

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
4. **100-Level Cosmic Detective Game Engine**:
   - Serves 100 progressive levels across 4 difficulty tiers (*Novice*, *Explorer*, *Specialist*, *Commander*).
   - Serves panchromatic monochrome (Black & White) imagery with telemetry clues, verifying player guesses and returning true-color reveals with NASA scientific explanations.

---

## 📂 Directory Layout

```text
backend/
├── src/
│   ├── db/
│   │   ├── connection.js         # Mongoose connection manager
│   │   └── seed.js               # Database seeder (100 levels, targets, analogs)
│   ├── models/
│   │   ├── Analog.js             # Mongoose schema with GeoJSON 2dsphere index
│   │   ├── PlanetaryTarget.js    # Moon & Mars reference targets schema
│   │   ├── GameLevel.js          # 100-level B&W reconnaissance game schema
│   │   └── NasaDataset.js        # 100% NASA dataset catalog schema
│   ├── nasaDataCatalog.js        # 100% NASA datasets, Moon/Mars targets, Earth analogs
│   ├── similarityEngine.js       # PRD Section 8 hybrid similarity scoring engine
│   ├── imageSimilarityEngine.js  # Feature 2 visual & morphological photo matcher
│   └── gameLevelsData.js         # 100 educational levels categorized by 4 difficulty tiers
├── server.js                     # Express REST API routes & CORS configuration
├── .env.example                  # Environment configuration template
├── package.json                  # Node.js dependencies (express, mongoose, dotenv)
└── backend.md                    # Backend documentation
```

---

## 📡 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/health` | Service status, MongoDB Atlas status, total indexed analogs & game levels |
| `GET` | `/api/nasa-datasets` | Full catalog of verified 100% NASA datasets from MongoDB with DOIs |
| `GET` | `/api/targets` | Candidate lunar base targets (Artemis, Shackleton) and Martian exploration sites |
| `GET` | `/api/mission-profiles` | 4 PRD mission profiles (Permanent Base, Robotic Landing, Surface Exploration, Habitability) |
| `POST` | `/api/analog/search` | Computes scientific similarity from user input criteria sliders & returns ranked Earth analogs with side-by-side imagery |
| `GET` | `/api/analog/nearby` | **MongoDB Geospatial (`$near`)**: Finds Earth analogs near given `lat`/`lon` within `maxDistanceKm` |
| `POST` | `/api/analog/within-polygon` | **MongoDB Geospatial (`$geoWithin`)**: Finds Earth analogs inside a custom drawn polygon |
| `POST` | `/api/analog/image-match` | Finds morphologically similar Earth, Moon, and Mars imagery from an input photo |
| `GET` | `/api/game/levels` | Retrieves 100 game levels from MongoDB Atlas with difficulty filtering (`novice`, `explorer`, `specialist`, `commander`) |
| `POST` | `/api/game/guess` | Evaluates player guess (`earth_analog`, `moon`, `mars`) and reveals full-color photo + NASA scientific rationale |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (tested on Node.js v22)
- `npm`

### Installation & Run

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Start development server with auto-reload
npm run dev

# Or start production server
npm start
```

Default server runs on `http://localhost:8000`.
