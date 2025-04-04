import mongoose from "mongoose"

const connectDB = async () => {
  try {
    // Check if we already have a connection
    if (mongoose.connection.readyState === 1) {
      console.log("Using existing MongoDB connection");
      return;
    }

    // Set connection options for serverless environment
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Increase timeout to 10s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
      maxPoolSize: 10, // Limit connection pool size
      minPoolSize: 0, // Allow connections to be closed when idle
      connectTimeoutMS: 10000, // Give up initial connection after 10 seconds
    };

    // Connect to MongoDB
    const uri = `${process.env.MONGODB_URI}/ShopWithAjji`;
    console.log("Connecting to MongoDB...");
    await mongoose.connect(uri, options);
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Log more details about the error
    if (error.name === 'MongoServerSelectionError') {
      console.error("Could not connect to MongoDB server. Check your connection string and network.");
    } else if (error.name === 'MongoParseError') {
      console.error("Invalid MongoDB connection string format.");
    }
    // Don't throw the error in serverless environment
    // This allows the function to continue even if DB connection fails
  }
}

export default connectDB