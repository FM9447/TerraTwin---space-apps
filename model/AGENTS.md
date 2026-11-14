# 🧠 AGENTS.md — Model Directives

> **Scope**: `model/` directory  
> **Status**: **RESERVED / BLANK PER USER SPECIFICATION**  
> **Planned Phase**: Phase II (Offline Deep Learning & Multi-Spectral Feature Extraction)

---

## ⚠️ Mandatory Constraint for All AI Agents

**DO NOT CREATE CODE OR PLACE MODELS IN THIS DIRECTORY UNLESS EXPLICITLY REQUESTED BY THE USER.**

The user has explicitly designated that `model/` remain blank for the current MVP release.

---

## 🔭 Phase II Roadmap (When Authorized)

When the user authorizes Phase II development, agents will implement:

1. **PyTorch Vision Transformer (ViT)**:
   - Self-supervised feature extractor converting NASA satellite frames into 512D latent embeddings.
2. **Multi-Spectral Mineral Classifier**:
   - Random Forest & MLP classifier mapping ASTER GED thermal emissivity to CRISM Martian phyllosilicates.
3. **ONNX Web Runtime**:
   - Export models to `.onnx` for lightweight client-side execution in Node.js or browser WebAssembly.
