import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { config } from './src/config/env.js';
import { connectDB } from './src/db/connection.js';
import { requestLogger } from './src/middleware/requestLogger.js';
import { notFoundHandler, globalErrorHandler } from './src/middleware/errorHandler.js';
import apiRoutes from './src/routes/index.js';

const app = express();

// Security and utility middleware
app.use(cors({ origin: config.corsOrigin }));
app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ extended: true, limit: '15mb' }));
app.use(requestLogger);

// Mount main API router under /api
app.use('/api', apiRoutes);

// Error Handling Middleware
app.use(notFoundHandler);
app.use(globalErrorHandler);

// Start Server and Connect Database
let server;

async function bootstrap() {
  await connectDB();

  server = app.listen(config.port, () => {
    console.log(`\n🛰️  =======================================================`);
    console.log(`🚀 TerraTwin NASA Analog Discovery Backend Active`);
    console.log(`📡 Listening on Port: ${config.port} (Environment: ${config.nodeEnv})`);
    console.log(`🔗 Health Check: http://localhost:${config.port}/api/health`);
    console.log(`=======================================================\n`);
  });
}

// Graceful shutdown handling
async function handleShutdown(signal) {
  console.log(`\n🛑 Received ${signal}. Starting graceful shutdown...`);
  if (server) {
    server.close(() => {
      console.log('HTTP server closed.');
    });
  }

  try {
    await mongoose.connection.close(false);
    console.log('MongoDB connection closed cleanly.');
  } catch (err) {
    console.error('Error closing MongoDB connection:', err.message);
  }

  process.exit(0);
}

process.on('SIGINT', () => handleShutdown('SIGINT'));
process.on('SIGTERM', () => handleShutdown('SIGTERM'));

if (!process.env.VERCEL) {
  bootstrap().catch((err) => {
    console.error('❌ Failed to bootstrap backend application:', err);
    process.exit(1);
  });
}

export default app;
