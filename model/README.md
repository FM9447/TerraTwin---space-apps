# TerraTwin - AI & Machine Learning Models 🧠🛰️

*(Reserved - currently left blank per project specification)*

This directory is designated for offline machine learning pipelines, deep learning model weights, and embedding extractors in future releases.

---

## 🔬 Architectural Roadmap for Phase II

In future development cycles, this directory will host:

1. **Self-Supervised Visual Embeddings**:
   - Vision Transformer (ViT) or ResNet-50 models pre-trained on NASA Earth observation tiles (MODIS, Landsat 8-9) and fine-tuned on Mars HiRISE and Lunar LROC surface photography.
   - Generates 512-dimensional vector embeddings for cosine-similarity terrain retrieval.

2. **Multispectral Mineralogy Classification**:
   - Random Forest and Multi-Layer Perceptron (MLP) architectures trained on ASTER GED thermal emissivity bands and CRISM hyperspectral cubes to classify mineralogical analogs (plagioclase anorthosite, tholeiitic basalt, hydrated smectite clays).

3. **Digital Elevation Relief & Roughness Predictor**:
   - Automated convolutional models computing Terrain Ruggedness Index (TRI) and obstacle hazard densities directly from raw GeoTIFF tiles.

---

## 📂 Planned Directory Structure

```text
model/
├── data/                 # Raw and processed training datasets (git-ignored)
├── notebooks/            # Jupyter/Colab notebooks for exploration and training
├── src/
│   ├── dataset.py        # Data loading and augmentation pipelines
│   ├── network.py        # Vision model architecture definitions
│   ├── train.py          # Training loop and experiment tracking
│   └── export_onnx.py    # Exporter for ONNX / Node.js web runtime
├── weights/              # Saved model checkpoints and weights (.pt, .onnx)
├── requirements.txt      # Python dependencies (PyTorch, Rasterio, Scikit-learn)
└── README.md             # Model documentation
```
