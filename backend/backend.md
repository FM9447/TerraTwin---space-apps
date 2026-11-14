# TerraTwin - Backend Service ⚙️

This directory contains the backend services and APIs for **TerraTwin**. It is responsible for handling API requests from the frontend, data ingestion pipelines (e.g., satellite feeds, environmental telemetry), database operations, and proxying/serving model predictions.

---

## 📂 Directory Layout

```text
backend/
├── app/                  # Application source code
│   ├── api/              # API endpoints / routes
│   ├── core/             # Core configurations and settings
│   ├── models/           # Database schemas and data models
│   └── services/         # Business logic, third-party integrations, and pipelines
├── tests/                # Automated unit and integration tests
├── requirements.txt      # Python dependencies (or package.json if Node.js)
└── README.md             # Backend documentation
```

---

## 🚀 Getting Started

### Prerequisites

- Python 3.10+ (or Node.js 18+ depending on chosen stack)
- Virtual environment tool (`venv`, `conda`, or `poetry`)

### Setup & Installation

1. Navigate to the backend directory:
   ```bash
   cd backend
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

4. Run the development server:
   ```bash
   uvicorn app.main:app --reload --port 8000
   ```

---

## 📡 API Endpoints & Docs

Once the backend service is running:
- Interactive Swagger UI: `http://localhost:8000/docs`
- ReDoc documentation: `http://localhost:8000/redoc`
