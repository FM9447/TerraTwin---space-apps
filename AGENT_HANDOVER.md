# 🛰️ TerraTwin — Universal AI Agent Handover & Continuity Blueprint

> **Challenge**: NASA International Space Apps Challenge (*"Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars"*)  
> **Reference Document**: `planetary_analog_discovery_prd.docx`  
> **Repositories**: 
> - Core Workstation (Backend + Docs): [FM9447/TerraTwin---space-apps](https://github.com/FM9447/TerraTwin---space-apps)
> - Frontend Application: [AFarHitman7/twin-worlds](https://github.com/AFarHitman7/twin-worlds)  
> **Database**: MongoDB Atlas Cluster (`terratwin` database)  
> **Purpose**: Enables any AI agent (Antigravity, Cursor, Windsurf, Claude Code, Copilot, Gemini CLI) to immediately resume development without context loss or credit waste.

---

## 📌 1. Cardinal Scientific & Architectural Rules

Any agent working on this repository **MUST** obey these inviolable rules:

1. **100% NASA Scientific Datasets Only**: Zero hallucinated parameters, zero non-NASA datasets. Every metric must trace back to NASA LP DAAC, GES DISC, SEDAC, or NASA PDS Geosciences.
2. **PRD Section 8 Trio of Metrics**: Every candidate analog must report:
   - **Scientific Similarity Score ($S_{overall}$)**: Weighted composite using PRD Section 8.3 formula.
   - **Data Coverage %**: Usable active NASA feature parameters.
   - **Data Confidence %**: Sensor resolution, quality flags, and ground-truth validation.
   - *Scientific Honesty*: Always document where the analogy breaks down (e.g. Earth 101 kPa vs. Mars 0.6 kPa; presence of ozone UV shield; 1g gravity vs. 0.16g Moon / 0.38g Mars).
3. **Repository Boundaries**:
   - `backend/`: Node.js, Express.js, Mongoose ODM, MongoDB Atlas (with GeoJSON `Point` `[longitude, latitude]` and `2dsphere` spatial indexing).
   - `frontend/`: React 18/19, Vite, Three.js (WebGL 3D Earth, Moon, Mars globes), CSS Modules / Tailwind.
   - `model/`: **Reserved and left blank** for Phase II offline PyTorch Vision Transformer (ViT) embeddings. Do not generate placeholder scripts here.

---

## 🏗️ 2. What Has Been Completed & Verified

### Backend Architecture (`backend/`)
- **Framework**: Express.js with modular layered architecture (`src/config/`, `src/middleware/`, `src/controllers/`, `src/routes/`, `src/models/`, `src/db/`).
- **Middleware**:
  - `requestLogger.js`: Latency tracking and HTTP status reporting.
  - `validator.js`: Enforces coordinate limits (lat: -90..+90, lon: -180..+180) and GeoJSON polygon structure.
  - `errorHandler.js`: Standardized JSON error response format.
- **Database (MongoDB Atlas)**:
  - Live connection active to cluster `cluster0.3ohbt20.mongodb.net/terratwin`.
  - Mongoose models:
    - `Analog.js`: 8 Earth analog sites with GeoJSON coordinates and `2dsphere` index.
    - `GameLevel.js`: 100 calibrated levels across 4 difficulty tiers (*Novice*, *Explorer*, *Specialist*, *Commander*).
    - `PlanetaryTarget.js`: Moon Artemis South Pole, Shackleton Rim, Mars Jezero, Gale, Olympus Mons.
    - `NasaDataset.js`: 10 verified NASA DAAC and PDS datasets.
  - Automated seeder: `npm run seed` runs clean insertion with zero duplicates.
- **Active Endpoints**:
  - `GET /api/health`: Database connection status and record counts.
  - `GET /api/nasa-datasets`: 100% NASA catalog and DOIs.
  - `GET /api/targets`: Lunar & Martian target signatures.
  - `GET /api/mission-profiles`: 4 PRD mission profiles (Permanent Base, Robotic Landing, Surface Exploration, Habitability).
  - `POST /api/analog/search`: Parametric slider discovery ($S_{overall}$ formula).
  - `GET /api/analog/nearby`: MongoDB `$near` 2dsphere spatial radius query.
  - `POST /api/analog/within-polygon`: MongoDB `$geoWithin` boundary query.
  - `POST /api/analog/image-match`: 5D visual Euclidean photo similarity matcher.
  - `GET /api/game/levels`: Paginated 100 levels with difficulty tier filters.
  - `POST /api/game/guess`: Evaluates guess (`earth_analog`, `moon`, `mars`) and reveals full-color photo + NASA rationale.
- **Testing**: Native test runner `npm test` runs 4 test suites with **100% pass rate**.

---

## 🌐 3. Frontend Architecture & Integration Plan (`twin-worlds`)

The team's latest frontend repository is at **[https://github.com/AFarHitman7/twin-worlds](https://github.com/AFarHitman7/twin-worlds)** (Live at `https://twin-worlds-flax.vercel.app`).

### Component Mapping:
- **`src/pages/AtlasPage.jsx`**: Interactive Three.js globe with 18 Earth analog pins.
  - *Integration Task*: Connect globe pins to `GET /api/analog/nearby` and `POST /api/analog/search` so clicking anywhere on Earth dynamically queries our MongoDB backend.
- **`src/pages/GamePage.jsx`**: "Signal Test" greyscale reconnaissance game (currently 12 rounds).
  - *Integration Task*: Upgrade the round pool from 12 rounds to our **100 MongoDB levels** via `GET /api/game/levels`, adding the 4 difficulty filters (*Novice*, *Explorer*, *Specialist*, *Commander*).
- **`src/components/sections/compare.jsx`**: Side-by-side surface comparison.
  - *Integration Task*: Embed the Visual Photo Matcher (`/api/analog/image-match`) allowing users to upload custom photos.

---

## 💰 4. Credit Conservation & Multi-Agent Strategy

### ⚠️ Multi-Agent Warning
Running multiple autonomous subagents in parallel consumes **3x to 5x more tokens** because each subagent carries its own context window, system prompt, and tool-execution iterations.

### 🛡️ Recommended Credit-Saving Protocol:
1. **Model Assignment Hierarchy**:
   - **Orchestrator Agent**: Use `Gemini 3.8 Flash` or `Claude 3.5 Sonnet` for planning and architecture review.
   - **Worker Subagents**: If subagents are spawned, assign them to `flash_lite` (10x cheaper) for reading files, linting, and running builds.
2. **Local GPU Offloading ($0 Cost)**:
   - Your machine has an **NVIDIA GeForce RTX 3050 Laptop GPU (6 GB VRAM)** with **Ollama** installed.
   - Run **`qwen2.5-coder:7b`** locally via Ollama:
     ```bash
     ollama run qwen2.5-coder:7b
     ```
   - It runs at **~40 tokens/sec** directly inside your 6GB VRAM. Use it for routine refactoring, regex, test authoring, and documentation generation with **$0 API credit cost**.

---

## 🧰 5. Recommended Agent Skills from GitHub

Install these open skills via `npx skills add <repo@skill>`:

| Skill | Source | Why It Matters for TerraTwin |
| :--- | :--- | :--- |
| **`mongodb-query-optimizer`** | `mongodb/agent-skills` | Optimizes `2dsphere` indexes, compound spatial queries, and aggregation pipelines on MongoDB Atlas. |
| **`threejs-spatial-data`** | `cesartevisual/threejs-skills` | Converts GPS `[lat, lon]` into 3D Cartesian `(x, y, z)` vectors on rotating Three.js spheres. |
| **`threejs-performance`** | `cloudai-x/threejs-skills` | Prevents WebGL memory leaks by disposing geometries, textures, and requestAnimationFrame loops. |
| **`web-design-guidelines`** | `vercel-labs/agent-skills` | Enforces accessible typography, high-contrast dark mode, and smooth CSS transitions. |
| **`token-conservation`** | Local / Built-in | Restricts verbose dumps and keeps responses dense and actionable. |

---

## 📋 6. Immediate Next Tasks (Roadmap)

1. **Remount Drive D to Read-Write**:
   ```bash
   sudo ntfsfix /dev/nvme0n1p5 && sudo mount -o remount,rw /media/fm9447/D
   ```
2. **Merge `twin-worlds` Frontend**:
   - Merge `twin-worlds/src` into `TerraTwin/frontend/src`.
   - Update API fetch URLs to call `http://localhost:8000/api/*`.
3. **Connect Atlas to MongoDB**:
   - Enable real-time coordinate lookup and polygon bounding boxes on the Three.js globe.
4. **Scale Game to 100 Levels**:
   - Wire `GamePage.jsx` to fetch levels dynamically from `/api/game/levels`.
5. **Verify Pre-Commit**:
   - Backend: `cd backend && npm test` (100% pass).
   - Frontend: `cd frontend && npm run build` (0 bundling errors).
   - Commit and push to `FM9447/TerraTwin---space-apps`.

---

## 💬 7. Copy-Pasteable Prompt for ANY AI Platform / Agent

Copy and paste the exact prompt below into **Cursor, Windsurf, Claude Code, GitHub Copilot, Gemini CLI, or a new Antigravity session**:

```markdown
You are an expert AI software engineer and planetary GIS specialist working on TerraTwin for the NASA International Space Apps Challenge ("Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars").

Please review the architectural blueprint in AGENTS.md and the PRD (planetary_analog_discovery_prd.docx).

CORE RULES YOU MUST FOLLOW:
1. 100% NASA Scientific Datasets Only: Sourced strictly from NASA LP DAAC (NASADEM, MODIS LST, ASTER GED), NASA GES DISC (GPM IMERG), NASA SEDAC (GPWv4), and NASA PDS Geosciences (LRO LOLA/Diviner, MRO HiRISE/CRISM, MGS MOLA). No non-NASA datasets or synthetic figures.
2. PRD Scientific Similarity Framework: Compute weighted similarity S_overall = sum(w_i * S_i) / sum(w_i) and report the Trio of Independent Metrics (Similarity %, Data Coverage %, Data Confidence %). Always explain where the analogy breaks down (atmosphere, UV shield, gravity).
3. Stack Boundaries:
   - Backend: Node.js (Express), MongoDB Atlas (Mongoose ODM with GeoJSON Point [lon, lat] and 2dsphere indexing).
   - Frontend: React (Vite, Three.js WebGL globe, CSS Modules/Tailwind), based on https://github.com/AFarHitman7/twin-worlds.
   - Model: Reserved and kept blank for Phase II.
4. Credit Optimization: Be concise, do not dump entire files unnecessarily. If delegating to subagents, use lightweight models (flash_lite) or local Ollama (qwen2.5-coder:7b on RTX 3050 6GB VRAM) to conserve credits.

CURRENT PROJECT STATUS:
- Backend: Production-ready MVC with controllers, routes, middleware, Mongoose models, and passing automated test suite (npm test).
- Database: Live on MongoDB Atlas cluster (cluster0.3ohbt20.mongodb.net/terratwin) with seeded NASA datasets, targets, 8 analogs, and 100 game levels.
- Frontend: Standalone frontend exists at https://github.com/AFarHitman7/twin-worlds (Three.js globe with 18 pins, 12-round reconnaissance game).

YOUR TASK:
1. Integrate the twin-worlds frontend with the TerraTwin backend REST API:
   - Wire the Atlas Three.js globe to query dynamic analogs from /api/analog/search and /api/analog/nearby.
   - Upgrade the Signal Test game from 12 rounds to the 100 levels served by /api/game/levels across 4 difficulty tiers.
   - Integrate the visual photo similarity matcher (/api/analog/image-match) into the compare section.
2. Verify all backend tests pass (npm test) and frontend builds cleanly (npm run build).
3. Commit and push all updates to https://github.com/FM9447/TerraTwin---space-apps.
```
