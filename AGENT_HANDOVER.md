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
- **Database (MongoDB Atlas)**: Live on `cluster0.3ohbt20.mongodb.net/terratwin` with seeded NASA datasets, targets, 8 analogs, and 100 game levels.
- **Active Endpoints**: `/api/health`, `/api/nasa-datasets`, `/api/targets`, `/api/mission-profiles`, `/api/analog/search`, `/api/analog/nearby`, `/api/analog/within-polygon`, `/api/analog/image-match`, `/api/game/levels`, `/api/game/guess`.
- **Testing**: Native test runner `npm test` runs 4 test suites with **100% pass rate**.

### Frontend Architecture (`frontend/`)
- **Three.js Atlas Globe**: Interactive 3D Earth globe with 18 pins, dynamic fly-to, and scientific dossiers.
- **Reconnaissance Game**: 100 levels across 4 difficulty tiers (*Novice, Explorer, Specialist, Commander*).
- **Workstation View**: Integrated PRD parametric discovery, 5D visual photo similarity matcher, and full NASA dataset catalog.
- **Build Status**: `npm run build` succeeds cleanly with **0 bundling errors**.

---

## 💰 3. Verified $0-Credit Development Stack

All API keys are securely housed locally in `~/.env.ai-keys` (`chmod 600`) and strictly excluded from Git:

| Provider | Model / Tier | Cost & Status | Role |
| :--- | :--- | :--- | :--- |
| **Local RTX 3050 (Ollama)** | `qwen2.5-coder:7b` | **$0.00 Forever** | Running locally in 6GB VRAM at ~35 tok/s, 100% offline, zero rate limits. |
| **Cloudflare Workers AI** | `@cf/meta/llama-3.1-8b-instruct` | **$0.00 Free Daily** | 10,000 neurons free/day (~35k calls/day). Leave IP filter blank for any network. |
| **Cerebras Cloud** | `qwen-3.8-27b` | **$0.00 Free Trial** | 9ms ultra-fast inference. Auto-recharge is OFF, so zero card charges. |
| **NVIDIA NIM** | `deepseek-coder-6.7b`, `codestral-22b` | **$0.00 One-Time** | 1,000 free API calls on registration. No card on file. |
| **GitHub Models** | `gpt-4o-mini`, `claude-3-5-sonnet` | **$0.00 Daily** | Prototyping quota via GitHub PAT. |
| **Gemini 3.8 Flash** | Cloud Orchestrator | **Included** | High-level PRD mathematics and architectural audits. |

---

## 🛑 4. Anti-Redundancy & Tool Governance Matrix

1. **State Check Before Action**: Always check `git status --porcelain` and existing files first. If code, levels, or tests are already implemented and passing, **DO NOT re-generate or re-write them**.
2. **Tool Matrix**: Follow [`AGENT_GOVERNANCE_ROUTER.md`](file:///media/fm9447/D/MULearn/TerraTwin%20-%20Space%20Apps/AGENT_GOVERNANCE_ROUTER.md):
   - **GSD**: Max 3 file reads during research.
   - **Roo Code**: Enforce Architect ➔ Coder ➔ Reviewer separation.
   - **Ralph**: Hard cap of **maximum 3 test-and-fix iterations**.
   - **CodeRabbit**: Single-pass pre-commit audit.

---

## 💬 5. Copy-Pasteable Prompt for ANY AI Platform / Agent

Copy and paste the prompt below into **Cursor, Windsurf, Claude Code, GitHub Copilot, or the other Antigravity chat**:

```markdown
You are an expert AI software engineer working on TerraTwin for the NASA International Space Apps Challenge.
Review AGENTS.md, AGENT_HANDOVER.md, and AGENT_GOVERNANCE_ROUTER.md.

CURRENT STATUS:
- Backend: Production-ready MVC, MongoDB Atlas live with 100 game levels & 8 analogs. All tests pass (npm test).
- Frontend: Three.js Atlas globe, 100-level reconnaissance game, and workstation are integrated and building cleanly (npm run build).
- Local $0 Stack: Local Ollama (qwen2.5-coder:7b on RTX 3050), Cloudflare Workers AI, Cerebras Cloud, and NVIDIA NIM are configured in ~/.env.ai-keys.
- Anti-Redundancy: Always verify git status before executing; never rewrite passing code.
```
