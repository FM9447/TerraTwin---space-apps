import mongoose from 'mongoose';

const planetaryTargetSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  planet: { type: String, required: true },
  coordinates: {
    lat: { type: Number, required: true },
    lon: { type: Number, required: true }
  },
  elevation: { type: String, required: true },
  mission_profile: { type: String, required: true },
  nasa_primary_source: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  scientific_targets: [{ type: String }],
  criteria_signature: {
    roughness: { type: Number, default: 50 },
    relief: { type: Number, default: 50 },
    slope: { type: Number, default: 50 },
    aridity: { type: Number, default: 50 },
    thermal: { type: Number, default: 50 },
    rockiness: { type: Number, default: 50 },
    volcanic: { type: Number, default: 50 },
    access: { type: Number, default: 50 }
  }
}, {
  timestamps: true
});

export default mongoose.models.PlanetaryTarget || mongoose.model('PlanetaryTarget', planetaryTargetSchema);
