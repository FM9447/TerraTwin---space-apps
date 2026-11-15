import mongoose from 'mongoose';

const clueSchema = new mongoose.Schema({
  instrument: { type: String, required: true },
  mineralogy: { type: String, required: true },
  terrain_metrics: { type: String, required: true },
  thermal_environment: { type: String, required: true }
}, { _id: false });

const gameLevelSchema = new mongoose.Schema({
  level_number: { type: Number, required: true, unique: true, index: true },
  difficulty: { type: String, required: true },
  difficulty_id: { type: String, required: true, index: true },
  frame_code: { type: String, required: true },

  target_type: { type: String, required: true, enum: ['earth_analog', 'moon', 'mars'] },
  target_name: { type: String, required: true },
  location_context: { type: String, required: true },

  // GridFS file id for the mystery image. The image bytes never sit in this
  // document; the API streams them from the gameimages bucket.
  image_id: { type: mongoose.Schema.Types.ObjectId, default: null, index: true },
  image_alt: { type: String, required: true },
  image_query: { type: String },
  image_credit: { type: String, default: 'Wikimedia Commons contributor' },
  image_license: { type: String, default: 'See source page' },
  image_source_url: { type: String, default: null },

  clues: { type: clueSchema, required: true },
  scientific_rationale: { type: String, required: true },
  points: { type: Number, default: 100 }
}, {
  timestamps: true
});

export default mongoose.models.GameLevel || mongoose.model('GameLevel', gameLevelSchema);
