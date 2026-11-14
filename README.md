# TerraTwin 🌍🌕🔴

**Earth–Moon–Mars Planetary Analog Discovery & Scientific Intelligence Platform**  
*Built for the NASA Space Apps Challenge: **"Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars"***

---

## 🛰️ Executive Summary & PRD Alignment

Space agencies rely on terrestrial environments (analogs) to benchmark rover navigation, test cryogenic drills, simulate EVA spacesuit operations, and study prebiotic chemistry before launching missions into deep space.

**TerraTwin** is an open-source, scientifically grounded discovery workstation that systematically identifies and characterizes Earth locations analogous to candidate **Artemis Lunar South Pole base locations** and **Martian exploration landing zones**.

Altered in strict accordance with the product requirements in `planetary_analog_discovery_prd.docx`:
- **100% NASA Scientific Datasets**: Every parameter, elevation profile, and thermal signature is sourced directly from NASA DAACs and the NASA Planetary Data System (PDS).
- **Explainable Discovery (PRD Section 8)**: Calculates multi-dimensional scientific similarity ($S_{overall} = \frac{\sum w_i S_i}{\sum w_i}$) accompanied by independent metrics for **Data Coverage %** and **Data Confidence %**.
- **Evidence Breakdown**: Explains both why an Earth site is analogous and where the analogy breaks down (atmospheric pressure differences, UV shield, gravity).

---

## ✨ Core Features

### 1. 🔍 Parametric Discovery & Side-by-Side Satellite Imagery
- **Multi-Criteria Input Sliders**: Users can discover analogs according to custom input sliders (Terrain Roughness TRI, Elevation Relief, Slope Gradient, Hyper-Aridity, Thermal Extremes $\Delta T$, Rockiness, Basaltic Volcanism, Operational Remoteness).
- **PRD Mission Profiles**: 4 independently weighted mission profiles (*Moon Permanent Base Preparation*, *Moon Robotic Operations*, *Mars Surface Exploration*, *Mars Scientific Habitability*).
- **Side-by-Side High-Resolution Imagery**: Displays high-resolution satellite photography of the matched Earth analog side-by-side with candidate Moon (Artemis, Shackleton) or Mars (Jezero, Gale, Olympus Mons) target imagery.

### 2. 📷 Visual Photo Analog Matcher
- **Find Similar Images Using a Photograph**: Upload any surface photograph or pick from calibrated terrain samples (basalt flows, impact craters, aeolian dunes, polar ice).
- **Morphological Feature Scanner**: Extracts surface roughness, luminance distribution, edge density, and geological textures.
- **Cross-Planetary Results**: Identifies visually and morphologically matching surfaces across **Earth**, **Moon**, and **Mars** with match percentages and scientific descriptions.

### 3. 🎮 Cosmic Detective: 100-Level Black & White Educational Game
- **100 Progressive Scientific Levels**: Spanning 4 difficulty tiers:
  - **Novice** (Levels 1–25)
  - **Explorer** (Levels 26–50)
  - **Specialist** (Levels 51–75)
  - **Commander** (Levels 76–100)
- **Panchromatic Monochrome (B&W) Display**: Photos are shown in black and white to eliminate atmospheric color cues, teaching users to identify planetary terrain by cratering, slope, talus, and texture like a planetary geologist.
- **NASA Telemetry Clues**: Access sensor clues (NASA instrument, mineralogy, slope, and temperature).
- **True-Color Reveal Animation**: Guessing triggers celebratory confetti and reveals the true-color photograph with NASA scientific rationale.

### 4. 🌐 3D Interactive Orbit Explorer
- WebGL 3D planetary simulation (Earth, Moon, Mars) rendered with Three.js.

---

## 📡 100% NASA Scientific Datasets Architecture

| Dimension | NASA Dataset | Instrument / Mission | NASA Provider |
| :--- | :--- | :--- | :--- |
| **Topography & Slope** | `NASADEM_HGT v001` (30m) | Space Shuttle Endeavour (SRTM) | NASA LP DAAC |
| **Surface Temperature** | `MOD11A2 v061` (1km) | MODIS on NASA Terra | NASA LP DAAC |
| **Emissivity & Basalt** | `ASTER GED AG100 v003` (100m) | ASTER on NASA Terra | NASA LP DAAC / METI |
| **Hyper-Aridity** | `GPM_3IMERGM v07` (0.1°) | GPM Core Observatory | NASA GES DISC |
| **Operational Remoteness** | `GPWv4.11` (1km) | EOSDIS Gridded Population | NASA SEDAC |
| **Lunar Topography & Slopes** | `LRO LOLA GDR` (20m-237m) | Lunar Orbiter Laser Altimeter | NASA PDS Geosciences |
| **Lunar Cryo Temperatures** | `LRO Diviner Thermal GDR` | Diviner Radiometer on LRO | NASA PDS Geosciences |
| **Martian Topography** | `MGS MOLA MEGDR` (463m) | Mars Orbiter Laser Altimeter | NASA PDS Geosciences |
| **Martian Micro-Roughness** | `MRO HiRISE DTM` (0.25m/px) | High Resolution Imaging Science | NASA PDS / USGS |
| **Martian Mineralogy** | `MRO CRISM Targeted` | CRISM Hyperspectral Imager | NASA PDS Geosciences |

---

## 📁 Repository Structure

```text
TerraTwin/
├── backend/
│   ├── src/
│   │   ├── nasaDataCatalog.js        # 100% NASA datasets, Moon/Mars targets, Earth analogs
│   │   ├── similarityEngine.js       # PRD Section 8 hybrid similarity calculation
│   │   ├── imageSimilarityEngine.js  # Feature 2 visual photo matcher engine
│   │   └── gameLevelsData.js         # 100 educational game levels
│   ├── server.js                     # Node.js / Express REST API
│   ├── package.json                  # Backend dependencies
│   └── backend.md                    # Detailed backend documentation
├── frontend/
│   ├── src/
│   │   ├── components/               # HeaderNav, ParametricDiscovery, PhotoMatcher, CosmicGame, etc.
│   │   ├── data/                     # Data modules & calculation engines
│   │   ├── App.jsx                   # Main React application
│   │   ├── main.jsx                  # React DOM entrypoint
│   │   └── index.css                 # Tailwind CSS styling
│   ├── package.json                  # React 18, Vite 5, Three.js, Lucide, Tailwind
│   └── frontend.md                   # Detailed frontend documentation
├── model/
│   └── model.md                      # Reserved (left blank per specifications)
└── README.md                         # Main repository documentation
```

---

## 🛠️ Quickstart

### 1. Run the Backend (Node.js)
```bash
cd backend
npm install
npm run dev
# Running on http://localhost:8000
```

### 2. Run the Frontend (React.js + Vite)
```bash
cd frontend
npm install
npm run dev
# Running on http://localhost:3000
```

---

## 📄 Documentation Links
- [Frontend Documentation](./frontend/frontend.md)
- [Backend Documentation](./backend/backend.md)
- [Model Documentation](./model/model.md)

---

## 📜 License
Licensed under the [MIT License](LICENSE). Built for the NASA International Space Apps Challenge.
