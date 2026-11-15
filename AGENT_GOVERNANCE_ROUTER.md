# 🛡️ TerraTwin — Unified Agent Governance & Credit Optimization Engine

> **Purpose**: Eliminates token waste, prevents redundant agent re-work, safeguards your RTX 3050 VRAM from crashing, and orchestrates GSD, Roo Code, Ralph, and CodeRabbit strictly on an as-needed basis.

---

## 🛑 1. The Anti-Redundancy & Idempotency Directive (No-Op Guard)

> **Core Problem**: AI agents frequently re-write working files, re-seed databases, or re-run entire test suites even when nothing has changed, wasting minutes and thousands of tokens.

### Inviolable Pre-Execution Rules for ALL Agents:
1. **State Inspection Before Action**:
   - Before executing an edit, command, or script, run `git status --porcelain` and check the target file/database state.
   - If the requested feature, file, or schema already exists and passes verification, **DO NOT re-generate or re-write it**. Explicitly state: *"Already verified and up-to-date; skipping redundant execution."*
2. **Targeted Diff Edits Only**:
   - Never replace or rewrite a 300-line file when only modifying 5 lines. Always use localized targeted replacements.
3. **Idempotent Database Operations**:
   - Seed scripts must check for existing records (e.g. `upsert` or check by unique key/DOI/target ID) rather than wiping or blindly re-inserting records.
4. **Conditional Build & Test Execution**:
   - Only execute `npm test` or `npm run build` if files within the respective `backend/` or `frontend/` directory were actually modified. If zero files changed, report the prior verified status.

---

## 🧭 2. Tiered Intelligence Architecture (75%–85% Token Savings)

Never use high-cost cloud models for routine, repetitive tasks. Route requests based on complexity:

```
           ┌───────────────────────────────────────────────┐
           │            Incoming Agent Request             │
           └───────────────────────┬───────────────────────┘
                                   │
            Is it Architecture, NASA Math, or Final Review?
                                   │
                 ┌─────────────────┴─────────────────┐
                YES                                  NO
                 │                                   │
      ┌──────────────────────┐             Is Internet Available?
      │   TIER 2: GEMINI     │                       │
      │ 3.8 Flash (High/Med) │            ┌──────────┴──────────┐
      │  - 1M token context  │           YES                    NO
      │  - Scientific logic  │            │                     │
      │  - System blueprints │   ┌─────────────────┐   ┌─────────────────┐
      └──────────────────────┘   │ TIER 1: FREE    │   │ TIER 0: LOCAL   │
                                 │ CLOUD APIs      │   │ RTX 3050 (6GB)  │
                                 │ - GitHub Models │   │ - Qwen 2.5 Coder│
                                 │ - Cerebras      │   │ - 100% Offline  │
                                 │ - NVIDIA NIM    │   │ - Zero Rate Lim │
                                 │ - Mistral AI    │   │ - Storage on D: │
                                 └─────────────────┘   └─────────────────┘
```

> **Note**: Together AI and Groq are explicitly **excluded**.

| Tier | Engine / Provider | Cost | Tasks Handled |
| :--- | :--- | :--- | :--- |
| **Tier 0** | **Local RTX 3050 (Ollama `qwen2.5-coder`)** | **\$0.00** | Small code edits, regex, boilerplate generation, unit test authoring, docstrings, formatting. Zero internet required. |
| **Tier 1** | **Free Cloud APIs (GitHub Models / Cerebras / NVIDIA NIM / Mistral)** | **\$0.00** | High-speed script generation, fast refactoring, large context test cases, bulk JSON transforms. |
| **Tier 2** | **Gemini 3.8 Flash (Antigravity Orchestrator)** | **Targeted** | NASA PRD Section 8 calculations, Three.js matrix transforms, MongoDB 2dsphere aggregations, architectural audits. |

---

## ⚡ 3. Integrated Tool Governance Matrix

Use each specialized tool **ONLY when triggered** by specific criteria:

| Tool | Core Strength | When to Activate | Usage Cap / Guardrail |
| :--- | :--- | :--- | :--- |
| **`Get-Shit-Done` (GSD)** | Structured 4-phase execution | Feature kickoff or multi-file architectural overhauls | Limit research phase to 3 file reads before forcing plan generation. |
| **`Roo Code`** | Strict mode separation *(Architect / Coder / Reviewer)* | Complex state changes (e.g. Three.js globe + MongoDB spatial sync) | Force transition to Coder only after Architect outputs an actionable checklist. |
| **`Ralph`** | Autonomous test-and-fix feedback loops | Debugging failing `npm test` or Vite build errors | **Strict Cap**: Maximum **3 test-fix iterations**. If not resolved in 3 turns, stop and prompt the user. |
| **`CodeRabbit`** | High-signal automated PR & security review | Right before Git commits or PR creation | One-pass review checking: 1) Zero hardcoded keys, 2) 100% NASA DAAC conformity, 3) passing tests. |
| **`Remote Agent` (`agy remote-control`)** | Background task offloading | Long-running downloads, dataset seeding, or headless rendering | Disconnect immediately when task concludes. |

---

## 🖥️ 4. RTX 3050 VRAM & Desktop Safety Guardrails

Your laptop uses **NVIDIA PRIME Hybrid Graphics** (GNOME and browsers render on the integrated GPU, leaving 6144 MiB VRAM free on the RTX 3050).

To guarantee **zero browser stutters or system crashes**:
1. **Context Limit**: Cap local model context to `num_ctx: 8192` (consumes <500MB KV cache).
2. **Concurrency**: Keep `OLLAMA_NUM_PARALLEL=1` so multiple background requests never compete for VRAM.
3. **Storage Offload**: Models are stored on Drive D (`/media/fm9447/D/MULearn/Hackotberfest/ollama_models`), keeping root `/` safe with plenty of space.

---

## 🚀 5. Frontend Integration Blueprint (`twin-worlds`)

When initiating the frontend merge from `https://github.com/AFarHitman7/twin-worlds`:
1. **Atlas Three.js Globe**:
   - Replace mock coordinate arrays in `src/pages/AtlasPage.jsx` with dynamic calls to `http://localhost:8000/api/analog/nearby` and `http://localhost:8000/api/analog/search`.
2. **Reconnaissance Game (100 Levels)**:
   - Upgrade `src/pages/GamePage.jsx` to load levels dynamically from `http://localhost:8000/api/game/levels` with the 4 difficulty filters (*Novice, Explorer, Specialist, Commander*).
3. **Visual Photo Matcher**:
   - Embed Euclidean similarity matching via `POST /api/analog/image-match` into `src/components/sections/compare.jsx`.
