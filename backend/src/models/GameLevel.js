import mongoose from 'mongoose';

const gameLevelSchema = new mongoose.Schema({
  level_number: { type: Number, required: true, unique: true },
  difficulty: { type: String, required: true },
  difficulty_id: { type: String, required: true, index: true },
  frame_code: { type: String, required: true },
  target_type: { type: String, required: true, enum: ['earth_analog', 'moon', 'mars'] },
  target_name: { type: String, required: true },
  location_context: { type: String, required: true },
  image_url: { type: String, required: true },
  clues: {
    instrument: { type: String, required: true },
    mineralogy: { type: String, required: true },
    terrain_metrics: { type: String, required: true },
    thermal_environment: { type: String, required: true }
  },
  scientific_rationale: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.GameLevel || mongoose.model('GameLevel', gameLevelSchema);
