import mongoose from "mongoose"

// Cache the connection
let cachedConnection = null;

const connectDB = async () => {
  try {
    // If we already have a connection, return it
    if (cachedConnection) {
      console.log("Using cached MongoDB connection");
      return cachedConnection;
    }

    // Set connection options
    const options = {
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      maxPoolSize: 10, // Limit connection pool size
      minPoolSize: 0, // Allow connections to be closed when idle
    };

    // Connect to MongoDB
    const uri = `${process.env.MONGODB_URI}/ShopWithAjji`;
    console.log("Connecting to MongoDB...");
    
    const connection = await mongoose.connect(uri, options);
    console.log("DB Connected successfully");
    
    // Cache the connection
    cachedConnection = connection;
    return connection;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Don't throw the error to allow the application to continue
    return null;
  }
}

export default connectDB