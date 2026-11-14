# TerraTwin - AI / ML Models 🧠🛰️

This directory hosts machine learning and deep learning pipelines, model architectures, training workflows, and evaluation scripts for **TerraTwin**.

---

## 📂 Directory Layout

```text
model/
├── data/                 # Raw and processed datasets (git-ignored for large files)
├── notebooks/            # Jupyter/Colab notebooks for exploration and prototyping
├── src/                  # Production-ready training, validation, and inference code
│   ├── dataset.py        # Data loading and augmentation pipelines
│   ├── network.py        # Model architecture definitions
│   ├── train.py          # Training loop and experiment tracking
│   └── predict.py        # Inference script and model exporter
├── weights/              # Saved model checkpoints and exported weights (.pt, .onnx, etc.)
├── requirements.txt      # Python dependencies for model training and inference
└── README.md             # Model documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+
- GPU with CUDA support recommended for training

### Setup

1. Navigate to the model directory:
   ```bash
   cd model
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

---

## 🔬 Workflow

1. **Exploration**: Run notebooks in `notebooks/` to inspect satellite imagery and sensor datasets.
2. **Training**: Train models with custom hyperparameters:
   ```bash
   python src/train.py --config config.yaml
   ```
3. **Inference & Export**: Run inference or export to ONNX / TorchScript:
   ```bash
   python src/predict.py --weights weights/best_model.pt
   ```
