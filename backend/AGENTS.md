# ⚙️ AGENTS.md — Backend Directives

> **Scope**: `backend/` directory  
> **Primary Stack**: Node.js v18+, Express.js, Mongoose ODM, MongoDB Atlas  
> **Key Protocols**: NASA Open Data compliance, GeoJSON 2dsphere indexing, Modular MVC architecture

---

## 🏛️ Architecture Rules

Any agent modifying the backend must respect the layered architecture:

```text
Incoming Request -> [middleware] -> [routes] -> [controllers] -> [services / models] -> Outgoing JSON
```

1. **`src/config/env.js`**:
   - All environment variables must pass through this single source of truth.
   - Never call `process.env.VARIABLE` directly inside controllers or services.

2. **`src/models/`**:
   - **GeoJSON Standard**: All coordinates must be structured as:
     ```javascript
     location: {
       type: { type: String, enum: ['Point'], default: 'Point' },
       coordinates: [longitude, latitude] // Note: Longitude ALWAYS comes first in GeoJSON!
     }
     ```
   - **Spatial Index**: Always ensure `analogSchema.index({ location: '2dsphere' })` is active.

3. **`src/controllers/`**:
   - Controllers handle HTTP parsing, status codes, and delegate heavy scientific math to services or Mongoose models.
   - Always wrap async handlers in `try/catch` and pass errors to `next(err)`.

4. **`src/middleware/`**:
   - `requestLogger.js`: Tracks response times and status codes.
   - `validator.js`: Enforces coordinate ranges (lat: -90..+90, lon: -180..+180) and polygon validity.
   - `errorHandler.js`: Standardizes all error responses into `{ error, message, timestamp }`.

5. **Offline & Fallback Resilience**:
   - If MongoDB Atlas is unreachable or cold-starting, controllers must gracefully fall back to local in-memory catalogs (`nasaDataCatalog.js`, `gameLevelsData.js`) so the frontend never crashes during live demonstrations.

---

## 🧪 Verification Protocol

Before finishing any backend task, the agent MUST run:
```bash
cd backend
npm test
```
Verify that all tests pass without errors.
