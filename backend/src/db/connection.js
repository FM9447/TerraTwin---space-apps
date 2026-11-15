import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

let isConnected = false;

export async function connectDB() {
  if (mongoose.connection && mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }
  if (isConnected) {
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.warn('⚠️ MONGODB_URI not specified in environment variables.');
    return null;
  }

  try {
    const conn = await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000
    });
    isConnected = !!conn.connections[0].readyState;
    console.log(`✅ MongoDB Connected successfully to database: ${conn.connection.name}`);
    return conn;
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    return null;
  }
}
