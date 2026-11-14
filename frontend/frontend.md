# TerraTwin - Node.js & React.js Frontend 🌐🛰️

The **TerraTwin Frontend** is a scientific web dashboard built with **React.js**, **Vite**, **Tailwind CSS**, and **Three.js** to explore planetary analogs, test multi-criteria similarity models, match photos across planetary bodies, and play an educational 100-level reconnaissance game.

---

## 🚀 Key Modules & Features

### 1. 🔍 Parametric Discovery & Side-by-Side Satellite Imagery (Feature 1)
- **Interactive Criteria Sliders**: 8 multi-criteria sliders (Terrain Roughness TRI, Elevation Relief, Slope Gradient, Hyper-Aridity, Thermal Extremes $\Delta T$, Rockiness, Basaltic Volcanism, Operational Remoteness).
- **PRD Mission Profiles**: 4 independently weighted mission profiles (Moon Permanent Base, Moon Robotic Landing, Mars Surface Exploration, Mars Scientific Habitability).
- **Side-by-Side High-Res Imagery**: Directly displays high-resolution satellite imagery of the candidate Earth analog alongside the candidate Moon or Mars target.
- **Trio of Independent Scientific Metrics**: Reports Scientific Similarity ($S_{overall}$), Data Coverage %, and Data Confidence %.
- **PRD Scientific Breakdown**: Documents why the location is analogous, where the analogy breaks down, and field-test feasibility.

### 2. 📷 Visual Photo Matcher (Feature 2)
- **Photo Upload & Terrain Presets**: Upload custom landscape photos or select from calibrated samples (impact craters, basalt lava flows, aeolian dunes, polar ice).
- **Feature Extraction Scanner**: Evaluates surface roughness, edge frequency, luminance distribution, crater morphology, and volcanic texture.
- **Cross-Planetary Matching**: Identifies analogous terrains across Earth, Moon, and Mars with similarity percentage and morphological explanations.

### 3. 🎮 Cosmic Detective: 100-Level Black & White Educational Game (Feature 3)
- **100 Progressive Levels**: 100 calibrated levels spanning 4 difficulty tiers:
  - **Novice** (Levels 1–25)
  - **Explorer** (Levels 26–50)
  - **Specialist** (Levels 51–75)
  - **Commander** (Levels 76–100)
- **Panchromatic Monochrome Display**: Imagery is presented in pure black & white, removing color cues so users learn to distinguish surfaces based on topography, cratering, and erosion.
- **NASA Telemetry Clues**: Toggle clues for NASA Instrument, Mineralogy, Slope/Roughness, and Environmental conditions.
- **True-Color Reveal & Confetti**: Guessing reveals the true-color image, exact coordinates, and detailed NASA scientific rationale.

### 4. 🌐 3D Planetary Orbit Explorer
- Interactive WebGL 3D planet renderer (Earth, Moon, Mars) with atmospheric scattering and coordinate pinpoints.

### 5. 📚 100% NASA Dataset Catalog & PRD Matrix
- Complete breakdown of all 10 NASA DAAC and PDS data sources, parameters, resolutions, and direct links.

---

## 📂 Directory Layout

```text
frontend/
├── public/                     # Static assets
├── src/
│   ├── components/
│   │   ├── HeaderNav/          # Navigation bar and mission profile switcher
│   │   ├── ParametricDiscovery/# Sliders, discovery calculations, side-by-side imagery
│   │   ├── PhotoMatcher/       # Photo upload, visual feature extractor, matches
│   │   ├── CosmicGame/         # 100-level B&W educational game with reveal animation
│   │   ├── PlanetaryExplorer/  # Three.js 3D WebGL interactive globe
│   │   └── NasaCatalog/        # 100% NASA dataset catalog & PRD matrix
│   ├── data/
│   │   ├── nasaDataCatalog.js  # 100% NASA datasets, targets, and analog sites
│   │   ├── similarityEngine.js # PRD Section 8 hybrid similarity model
│   │   ├── imageSimilarityEngine.js # Visual photo matcher engine
│   │   └── gameLevelsData.js   # 100 educational game levels
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entrypoint
│   └── index.css               # Tailwind CSS rules & styling
├── index.html                  # HTML5 template
├── vite.config.js              # Vite configuration with backend API proxy
├── tailwind.config.js          # Tailwind styling theme
├── package.json                # Dependencies (React 18, Vite 5, Tailwind, Three.js, Lucide)
└── frontend.md                 # Frontend documentation
```

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (tested on Node.js v22)
- `npm`

### Installation & Run

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Production Build

```bash
npm run build
npm run preview
```
