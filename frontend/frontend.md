# TerraTwin - Frontend Application 🌐

This directory contains the client-side user interface and visualization dashboard for **TerraTwin**. It provides an interactive 2D/3D geospatial interface for exploring Earth observations, digital twin simulations, environmental layers, and analytics.

---

## 📂 Directory Layout

```text
frontend/
├── public/               # Static assets and icons
├── src/
│   ├── assets/           # Media and styling assets
│   ├── components/       # Reusable UI components (maps, charts, panels)
│   ├── pages/            # View pages and dashboard views
│   ├── services/         # API clients and data fetching logic
│   └── utils/            # Utility and helper functions
├── package.json          # Dependencies and scripts
└── README.md             # Frontend documentation
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- `npm` or `pnpm` / `yarn`

### Installation & Run

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) (or the port displayed in your terminal) in your browser.

---

## 🛠️ Build for Production

```bash
npm run build
npm run preview
```
