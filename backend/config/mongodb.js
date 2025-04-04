import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env')
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    }

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose
    })
  }

  try {
    cached.conn = await cached.promise
  } catch (e) {
    cached.promise = null
    throw e
  }

  return cached.conn
}

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err)
  cached.conn = null
  cached.promise = null
})

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected')
  cached.conn = null
  cached.promise = null
})

// Handle process termination
process.on('SIGINT', async () => {
  try {
    await mongoose.connection.close()
    console.log('MongoDB connection closed through app termination')
    process.exit(0)
  } catch (err) {
    console.error('Error during MongoDB connection closure:', err)
    process.exit(1)
  }
})

export default connectDB