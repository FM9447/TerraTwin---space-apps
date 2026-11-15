# 🛰️ AGENTS.md — Master Directive for AI Coding Agents

> **Project**: TerraTwin — Earth–Moon–Mars Planetary Analog Discovery & Scientific Intelligence Workstation  
> **Challenge**: NASA International Space Apps Challenge (*"Identify Earth Locations that Analog the Permanent Moon Base Locations and Mars"*)  
> **Reference Document**: `planetary_analog_discovery_prd.docx`  
> **Audience**: All AI coding agents (Antigravity, Cursor, Windsurf, Copilot, Claude Code, Gemini CLI, etc.) working on this repository.

---

## 🧭 Core Mission & Architectural Principles

Any AI agent interacting with this repository **MUST** adhere strictly to the following 5 inviolable principles:

### 1. 100% NASA Scientific Datasets Only
- **Zero Hallucination / Zero Non-NASA Data**: Every parameter, elevation model, land surface temperature, emissivity index, and precipitation metric must trace directly back to verified NASA DAACs or the NASA Planetary Data System (PDS).
- **Core NASA Sources**:
  - `NASADEM_HGT v001` (NASA LP DAAC 30m)
  - `MODIS MOD11A2 v061` (NASA LP DAAC 1km Land Surface Temperature $\Delta T$)
  - `ASTER GED AG100 v003` (NASA LP DAAC / METI 100m thermal emissivity & silicate/basalt index)
  - `GPM IMERG v07` (NASA GES DISC 0.1° precipitation & hyper-aridity)
  - `SEDAC GPWv4.11` (NASA SEDAC 1km operational remoteness)
  - `LRO LOLA & Diviner` (NASA PDS Geosciences Lunar altimetry and cryogenic cold-traps)
  - `MGS MOLA & MRO HiRISE` (NASA PDS Geosciences Martian topography and micro-roughness)

### 2. PRD Scientific Similarity Framework (Section 8)
- Always calculate the hybrid weighted similarity formula:
  $$S_{overall} = \frac{\sum w_i \cdot S_i}{\sum w_i}$$
- **The Trio of Independent Metrics**: Never collapse results into a single misleading score. Every candidate analog must report:
  1. **Similarity Score ($S_{overall}$)**: Mathematical resemblance to target.
  2. **Data Coverage %**: Completeness of active NASA parameters.
  3. **Data Confidence %**: Quality flags, sensor resolution, and ground-truth validation.
- **Scientific Honesty**: Always document where the analogy breaks down (e.g. Earth's atmospheric pressure of 101 kPa vs. Mars 0.6 kPa; presence of ozone UV shield; 1g gravity vs. 0.16g Moon / 0.38g Mars).

### 3. Repository Stack & Boundaries
- **Backend (`/backend`)**: Node.js & Express.js. Architecture: Controllers, Routes, Services, Middleware.
- **Database**: **MongoDB Atlas** (Mongoose ODM). All coordinates stored as GeoJSON `Point` `[longitude, latitude]` with active `2dsphere` spatial indexing.
- **Frontend (`/frontend`)**: React.js (React 18), Vite 5, Tailwind CSS, Lucide React, Three.js (WebGL).
- **Models (`/model`)**: **LEFT BLANK / RESERVED**. Do NOT generate random Python ML models or dummy weights in `/model` unless explicitly requested by the user.

### 4. Anti-Redundancy & Zero-Waste Execution Directive
- **State Check Before Action**: Always inspect `git status --porcelain` and database state before executing. If a file, level, seed, or test is already verified and up-to-date, **DO NOT re-generate or re-write it**.
- **Tiered Model Routing**: Offload routine code tasks to Local RTX 3050 (Ollama `qwen2.5-coder`) or approved free tiers (GitHub Models, Cerebras, NVIDIA NIM, Mistral). Use Gemini 3.8 Flash strictly as Architect/Reviewer. (Together AI and Groq are excluded).
- **Tool Governance**: Follow [AGENT_GOVERNANCE_ROUTER.md](file:///media/fm9447/D/MULearn/TerraTwin%20-%20Space%20Apps/AGENT_GOVERNANCE_ROUTER.md) for GSD, Roo Code, Ralph (max 3 loops), and CodeRabbit pre-commit checks.

---

## 🏛️ Directory-Specific Agent Responsibilities

| Directory | Role | Agent Guide | Primary Tech |
| :--- | :--- | :--- | :--- |
| **`/backend`** | REST APIs, MongoDB GeoJSON queries, calculation engines | [backend/AGENTS.md](file:///media/fm9447/D/MULearn/TerraTwin%20-%20Space%20Apps/backend/AGENTS.md) | Node.js, Express, Mongoose |
| **`/frontend`** | UI dashboard, B&W 100-level game, 3D WebGL globe, photo matcher | [frontend/AGENTS.md](file:///media/fm9447/D/MULearn/TerraTwin%20-%20Space%20Apps/frontend/AGENTS.md) | React 18, Vite, Three.js, Tailwind |
| **`/model`** | Reserved for Phase II offline PyTorch Vision Transformer embeddings | [model/AGENTS.md](file:///media/fm9447/D/MULearn/TerraTwin%20-%20Space%20Apps/model/AGENTS.md) | Reserved (Placeholder) |

---

## 🔒 Security & Git Hygiene

1. **Environment Variables**:
   - Never commit `.env` or raw connection strings to Git.
   - Use `.env.example` to document required environment variables.
2. **Pre-Commit Verification**:
   - Backend: Run `npm test` inside `backend/` and verify all tests pass.
   - Frontend: Run `npm run build` inside `frontend/` and verify zero bundling errors.
3. **Commit Messages**: Follow conventional commits:
   - `feat(...)`: New user-facing or scientific capability.
   - `fix(...)`: Bug fixes or calculation corrections.
   - `docs(...)`: Documentation or PRD updates.
