import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoutes.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import healthRouter from './routes/healthRoute.js'

// App Config
const app = express()
const port = process.env.PORT || 8000

// Connect to MongoDB and Cloudinary
// Wrap in try-catch to prevent crashes in serverless environment
try {
  connectDB()
  connectCloudinary()
} catch (error) {
  console.error("Connection error:", error)
}

//middlewares
app.use(express.json())
app.use(cors({
  origin: '*', // Allow all origins in development
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}))

// Add error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ 
    success: false, 
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
  });
});

//api endpoints
app.use('/api/user',userRouter)
app.use('/api/product',productRouter)
app.use('/api/cart',cartRouter)
app.use('/api/order',orderRouter)
app.use('/api/health', healthRouter)

app.get('/',(req,res)=>{
    res.send("API WORKING")
})

// Only start the server if we're not in a serverless environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(port, ()=> console.log("Server started on PORT: "+port))
}

export default app