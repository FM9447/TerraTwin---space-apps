import mongoose from 'mongoose';

const nasaDatasetSchema = new mongoose.Schema({
  key: { type: String, required: true, unique: true },
  id: { type: String, required: true },
  name: { type: String, required: true },
  provider: { type: String, required: true },
  instrument: { type: String, required: true },
  spatial_resolution: { type: String, required: true },
  coverage: { type: String, required: true },
  parameters: [{ type: String }],
  url: { type: String, required: true },
  doi: { type: String, required: true }
}, {
  timestamps: true
});

export default mongoose.models.NasaDataset || mongoose.model('NasaDataset', nasaDatasetSchema);
