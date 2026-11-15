# TerraTwin - Node.js & MongoDB Backend ⚙️🛰️

The **TerraTwin Backend** is an enterprise-grade scientific Node.js & Express REST API powered entirely by **MongoDB Atlas**. It handles 100% NASA scientific dataset indexing, 2dsphere geospatial queries (`$near`, `$geoWithin`), multi-criteria parametric similarity scoring, visual photo feature matching, and serves the 100-question Cosmic Detective bank as a 10-level campaign.

---

## 🏛️ System Architecture & Features

```text
┌─────────────────────────────────────────────────────────────┐
│                   Express.js REST API Layer                 │
│  • CORS Enabled    • JSON Body Parser    • Query Routing   │
└──────────────────────────────▲──────────────────────────────┘
                               │
┌──────────────────────────────▼──────────────────────────────┐
│                  Scientific Calculation Engines              │
│  • similarityEngine.js       -> PRD Sec 8 (S_overall formula)│
│  • imageSimilarityEngine.js  -> Visual 5D Euclidean Matcher │
└──────────────────────────────▲──────────────────────────────┘
                               │ Mongoose ODM
┌──────────────────────────────▼──────────────────────────────┐
│                    MongoDB Atlas Cluster                    │
│  • Analogs (GeoJSON Point & 2dsphere Spatial Index)         │
│  • GameLevels (100-question bank → 10-level B&W campaign)      │
│  • PlanetaryTargets (Artemis Lunar South Pole & Mars Zones) │
│  • NasaDatasets (10 Verified LP DAAC, GES DISC & PDS Sources)│
└─────────────────────────────────────────────────────────────┘
```

---

## 📂 Directory Layout

```text
backend/
├── src/
│   ├── db/
│   │   ├── connection.js         # Mongoose connection manager with auto-retry
│   │   └── seed.js               # Database seeder (100 questions, targets, analogs, both GridFS buckets)
│   ├── models/
│   │   ├── Analog.js             # Mongoose schema with GeoJSON 2dsphere index
│   │   ├── PlanetaryTarget.js    # Moon & Mars reference targets schema
│   │   ├── GameLevel.js          # B&W reconnaissance question schema
│   │   └── NasaDataset.js        # 100% NASA dataset catalog schema
│   ├── nasaDataCatalog.js        # 100% NASA datasets, Moon/Mars targets, Earth analogs
│   ├── similarityEngine.js       # PRD Section 8 hybrid similarity scoring engine
│   ├── imageSimilarityEngine.js  # Feature 2 visual & morphological photo matcher
│   └── gameLevelsData.js         # 100 educational questions in 4 difficulty tiers
├── server.js                     # Express REST API routes & CORS configuration
├── .env.example                  # Environment configuration template
├── package.json                  # Node.js dependencies (express, mongoose, dotenv)
├── backend.md                    # Backend documentation
└── README.md                     # Folder documentation for GitHub
```

---

## 📡 API Endpoints Reference

### 1. Health & NASA Datasets
- `GET /api/health`
  - Returns service status, MongoDB Atlas connection health, and count of indexed analogs & game levels.
- `GET /api/nasa-datasets`
  - Returns complete catalog of verified 100% NASA datasets (LP DAAC, GES DISC, PDS Geosciences, SEDAC) with DOIs and parameters.
- `GET /api/targets`
  - Retrieves candidate lunar base targets (Artemis, Shackleton) and Martian exploration sites.
- `GET /api/mission-profiles`
  - Retrieves the 4 PRD mission profiles (Permanent Base, Robotic Landing, Surface Exploration, Habitability).

### 2. Scientific Discovery & Geospatial Search
- `POST /api/analog/search`
  - Computes weighted scientific similarity ($S_{overall} = \frac{\sum w_i S_i}{\sum w_i}$) from user criteria sliders.
  - Returns ranked Earth analogs with side-by-side imagery, Data Coverage %, and Data Confidence %.
- `GET /api/analog/nearby?lat=...&lon=...&maxDistanceKm=...`
  - **MongoDB Geospatial (`$near`)**: Uses MongoDB's `2dsphere` spatial index to find Earth analogs sorted by geodesic distance from any point on Earth.
- `POST /api/analog/within-polygon`
  - **MongoDB Geospatial (`$geoWithin`)**: Finds all Earth analogs situated inside any custom user-drawn polygon coordinate boundary.

### 3. Visual Photo Similarity Matcher
- `POST /api/analog/image-match`
  - Extracts 5D morphological feature vectors (edge density, texture roughness, albedo, crater/volcanic morphology).
  - Searches and returns the closest visual counterparts across Earth, Moon, and Mars.

### 4. Cosmic Detective Campaign Engine (10 levels × 10 questions)
- `GET /api/game/campaign`
  - Builds the 10-level campaign from the 100-question bank: every site used once, all three worlds in every level, difficulty ramping from level 1 to level 10, and question order shuffled per request. Payloads stay sanitized.
- `GET /api/game/levels`
  - Queries MongoDB Atlas for the 100 source questions with pagination and optional difficulty filtering (`novice`, `explorer`, `specialist`, `commander`).
- `POST /api/game/guess`
  - Verifies the player guess (`earth_analog`, `moon`, `mars`) and returns the full-colour reveal, exact coordinates, and detailed NASA scientific rationale.
- `GET /api/assets/:key`
  - Streams the editorial Twin Worlds imagery from the `siteassets` GridFS bucket.

---

## 🚀 Getting Started

### 1. Prerequisites
- [Node.js](https://nodejs.org/) v18+ (tested on Node.js v22)
- `npm`
- MongoDB Atlas cluster URI

### 2. Environment Configuration
Copy the template file to `.env`:
```bash
cp .env.example .env
```
Ensure your `MONGODB_URI` is populated:
```env
PORT=8000
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.3ohbt20.mongodb.net/terratwin?retryWrites=true&w=majority
```

### 3. Database Seeding
Seed the 100-question bank, planetary targets, Earth analogs and both image buckets into your MongoDB Atlas cluster:
```bash
npm run seed
```

### 4. Run the Server
```bash
# Development mode with live reload
npm run dev

# Or production mode
npm start
```
The server will start on `http://localhost:8000`.
