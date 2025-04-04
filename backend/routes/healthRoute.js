import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

// Health check endpoint
router.get('/', async (req, res) => {
  try {
    // Check MongoDB connection
    const dbStatus = mongoose.connection.readyState === 1 ? 'connected' : 'disconnected';
    
    // Get environment info
    const envInfo = {
      nodeEnv: process.env.NODE_ENV || 'not set',
      mongoDbStatus: dbStatus,
      timestamp: new Date().toISOString()
    };
    
    res.status(200).json({
      status: 'ok',
      message: 'API is running',
      environment: envInfo
    });
  } catch (error) {
    console.error('Health check error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Health check failed',
      error: error.message
    });
  }
});

export default router; 