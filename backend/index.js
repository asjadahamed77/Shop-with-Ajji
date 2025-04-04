import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'

// App Config
const app = express()

// Middleware to ensure database connection
const connectMiddleware = async (req, res, next) => {
  try {
    await connectDB();
    await connectCloudinary();
    next();
  } catch (error) {
    console.error('Connection error:', error);
    return res.status(500).json({
      success: false,
      message: 'Unable to connect to database'
    });
  }
};

// Basic middlewares
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Health check endpoint (no DB connection required)
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Apply database connection middleware to all API routes
app.use('/api', connectMiddleware);

// API endpoints
app.use('/api/user', userRouter);
app.use('/api/product', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

// Root endpoint (no DB connection required)
app.get('/', (req, res) => {
  res.json({ message: "API WORKING", status: "ok" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

// Start server if not in production
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 8000;
  app.listen(port, () => console.log(`Server started on PORT: ${port}`));
}

export default app;