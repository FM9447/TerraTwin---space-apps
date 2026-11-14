# TerraTwin - Node.js & React.js Frontend 🌐🛰️

The **TerraTwin Frontend** is an interactive planetary exploration workstation built with **React.js (React 18)**, **Vite 5**, **Tailwind CSS**, and **Three.js (WebGL)**. It provides scientific researchers and students with a multi-criteria discovery studio, an AI-powered visual photo analog matcher, an educational 100-level black-and-white reconnaissance game, and a 3D orbital planetary viewer.

---

## 🚀 Key Modules & Interactive Features

### 1. 🔍 Parametric Discovery & Side-by-Side Satellite Imagery
- **Dynamic Criteria Sliders**: Sliders for Terrain Roughness (TRI), Elevation Relief, Slope Gradient, Hyper-Aridity, Thermal Extremes $\Delta T$, Rockiness, Basaltic Volcanism, and Operational Remoteness.
- **4 PRD Mission Profiles**:
  - *Moon: Permanent Base Preparation* (cryogenic volatile traps & illumination)
  - *Moon: Landing & Robotic Operations* (hazard slope avoidance & basalt trafficability)
  - *Mars: Landing & Surface Exploration* (traverse mobility & diurnal thermal stability)
  - *Mars: Scientific Exploration & Habitability* (fluvial-lacustrine sedimentary geology)
- **Side-by-Side High-Res Satellite Imagery**: Renders high-resolution satellite photography of the matched Earth analog side-by-side with the candidate Moon or Mars target.
- **PRD Metric Trio**: Reports Scientific Similarity ($S_{overall}$), Data Coverage %, and Data Confidence % independently.
- **Evidence Breakdown**: Explains both why the location is analogous and where the analogy breaks down (e.g. atmospheric density, UV flux, gravity).

### 2. 📷 Visual Photo Analog Matcher
- **Find Similar Images Using a Photograph**: Upload your own landscape photo or select from calibrated planetary analog presets (impact craters, basalt lava flows, aeolian dunes, cryogenic ice).
- **Surface Feature Scanner**: Automatically extracts roughness, albedo, edge density, and geological textures.
- **Cross-Planetary Results**: Ranks and displays analogous terrains across **Earth**, **Moon**, and **Mars** with match percentages and morphological explanations.

### 3. 🎮 Cosmic Detective: 100-Level Black & White Educational Game
- **100 Progressive Scientific Levels** across 4 difficulty tiers:
  - **Novice** (Levels 1–25)
  - **Explorer** (Levels 26–50)
  - **Specialist** (Levels 51–75)
  - **Commander** (Levels 76–100)
- **Panchromatic Monochrome (B&W) Display**: Photos are displayed in pure black and white to strip away atmospheric blue and Martian red cues, training players to identify surfaces by cratering, slope, talus, and texture like a planetary geologist.
- **NASA Telemetry Clues**: Access sensor clues (NASA instrument, mineralogy, slope, and temperature).
- **True-Color Reveal Animation**: Guessing triggers celebratory confetti and reveals the true-color photograph with NASA scientific rationale.
- **Progress Tracking**: Tracks accuracy %, score, and consecutive correct answer streaks.

### 4. 🌐 3D Interactive Orbit Explorer
- Full WebGL 3D planetary simulation (Earth, Moon, Mars) rendered with Three.js, complete with orbital mechanics, atmospheric scattering, and coordinate pinpoints.

### 5. 📚 100% NASA Dataset Catalog & PRD Matrix
- Comprehensive documentation and clickable access points for all 10 NASA DAAC and PDS data sources, parameters, resolutions, and direct links.

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
├── frontend.md                 # Frontend documentation
└── README.md                   # Folder documentation for GitHub
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

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm run preview
```
