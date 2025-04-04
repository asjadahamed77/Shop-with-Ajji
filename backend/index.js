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

// Basic middlewares
app.use(express.json())
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Health check endpoint (no DB connection required)
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Database connection middleware
const dbMiddleware = async (req, res, next) => {
  try {
    const db = await connectDB()
    if (!db) {
      throw new Error('Database connection failed')
    }
    next()
  } catch (error) {
    console.error('Database connection error:', error)
    return res.status(503).json({
      success: false,
      message: 'Service temporarily unavailable. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    })
  }
}

// Apply database connection middleware to all API routes
app.use('/api', dbMiddleware)

// API routes
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: "API is running",
    status: "ok",
    timestamp: new Date().toISOString()
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err)
  
  // Handle specific error types
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      success: false,
      message: 'Validation Error',
      errors: Object.values(err.errors).map(e => e.message)
    })
  }

  if (err.name === 'CastError') {
    return res.status(400).json({
      success: false,
      message: 'Invalid ID format'
    })
  }

  // Default error response
  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  })
})

// Start server if not in production
if (process.env.NODE_ENV !== 'production') {
  const port = process.env.PORT || 8000
  app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
  })
}

export default app