# 🌐 AGENTS.md — Frontend Directives

> **Scope**: `frontend/` directory  
> **Primary Stack**: React 18, Vite 5, Tailwind CSS, Lucide React, Three.js (WebGL), Canvas-Confetti  
> **Theme Guidelines**: Deep Space Dark Theme (`#04070D` canvas, `#070A10` cards, cyan/amber/emerald accents)

---

## 🏛️ Component Architecture Rules

1. **State Isolation**:
   - Keep views modular inside `src/components/`:
     - `ParametricDiscovery/`: Criteria sliders, PRD mission profiles, side-by-side satellite imagery.
     - `PhotoMatcher/`: Visual photo upload, 5D Euclidean feature analyzer, cross-planetary image matching.
     - `CosmicGame/`: 100-level panchromatic reconnaissance game with telemetry clues and reveal animations.
     - `PlanetaryExplorer/`: Three.js 3D WebGL orbit viewer for Earth, Moon, and Mars.
     - `NasaCatalog/`: 100% NASA dataset catalog & PRD compliance matrix.

2. **Cosmic Detective Game Invariants (Feature 3)**:
   - **Monochrome Display**: Imagery MUST remain strictly in Black & White (`grayscale contrast-125`) before the player guesses. Color reveals occur only AFTER a guess is submitted.
   - **100 Levels Guarantee**: All 100 levels across the 4 difficulty tiers (*Novice 1-25*, *Explorer 26-50*, *Specialist 51-75*, *Commander 76-100*) must remain accessible.

3. **Three.js WebGL Resource Management**:
   - Always dispose geometries, materials, textures, and cancel `requestAnimationFrame` loops in the `useEffect` cleanup return function to prevent GPU memory leaks.

4. **Responsive & Accessible Design**:
   - Design for standard desktop displays while maintaining flex-wrap and drawer collapse behavior on mobile/tablets.

---

## 🧪 Verification Protocol

Before finishing any frontend task, the agent MUST run:
```bash
cd frontend
npm run build
```
Verify that Vite builds cleanly into `dist/` with zero module errors.
