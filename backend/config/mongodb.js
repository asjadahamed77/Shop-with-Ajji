import mongoose from "mongoose"

const connectDB = async () => {
  try {
    // Check if we already have a connection
    if (mongoose.connection.readyState === 1) {
      console.log("Using existing MongoDB connection");
      return;
    }

    // Set connection options
    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000, // Timeout after 5s
      socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    };

    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URI}/ShopWithAjji`, options);
    console.log("DB Connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    // Don't throw the error to allow the application to continue
  }
}

export default connectDB