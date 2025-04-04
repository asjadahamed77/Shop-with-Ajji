import app from '../index.js';

// This is the serverless function handler for Vercel
const handler = async (req, res) => {
  try {
    // Log request details for debugging
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    
    // Handle the request
    await app(req, res);
  } catch (error) {
    console.error('Serverless function error:', error);
    
    // Send a proper error response
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    });
  }
};

export default handler; 