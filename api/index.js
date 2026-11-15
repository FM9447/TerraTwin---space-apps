import app from '../backend/server.js';
import { connectDB } from '../backend/src/db/connection.js';

export default async function handler(req, res) {
  try {
    await connectDB();
  } catch (err) {
    console.error('MongoDB serverless connection error:', err);
  }
  return app(req, res);
}
