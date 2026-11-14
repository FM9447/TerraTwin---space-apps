import mongoose from 'mongoose';

const analogSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  country: { type: String, required: true },
  elevation: { type: String, required: true },
  image: { type: String, required: true },
  primary_planet_analog: { type: String, required: true },
  target_match_id: { type: String, required: true },
  nasa_datasets_used: [{ type: String }],
  similarity_score: { type: Number, default: 0 },
  data_coverage: { type: Number, default: 100 },
  data_confidence: { type: Number, default: 95 },
  morphology: { type: String, required: true },
  scientific_breakdown: {
    why_analog: { type: String, required: true },
    breakdown_limits: { type: String, required: true },
    field_test_utility: { type: String, required: true }
  },
  metrics: {
    roughness: { type: Number, required: true },
    relief: { type: Number, required: true },
    slope: { type: Number, required: true },
    aridity: { type: Number, required: true },
    thermal: { type: Number, required: true },
    rockiness: { type: Number, required: true },
    volcanic: { type: Number, required: true },
    access: { type: Number, required: true }
  },
  // GeoJSON Point for 2dsphere spatial indexing
  location: {
    type: {
      type: String,
      enum: ['Point'],
      default: 'Point'
    },
    coordinates: {
      type: [Number], // [longitude, latitude]
      required: true
    }
  }
}, {
  timestamps: true
});

// Create 2dsphere index for $near, $geoWithin, and spatial range queries
analogSchema.index({ location: '2dsphere' });

export default mongoose.models.Analog || mongoose.model('Analog', analogSchema);
