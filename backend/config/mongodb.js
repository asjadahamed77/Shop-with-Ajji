import mongoose from "mongoose"

let isConnected = false;

const connectDB = async () => {
  if (isConnected) {
    console.log('=> Using existing database connection');
    return;
  }

  try {
    const db = await mongoose.connect(`${process.env.MONGODB_URI}/ShopWithAjji`, {
      maxPoolSize: 1,
    });

    isConnected = !!db.connections[0].readyState;
    console.log('=> Using new database connection');
  } catch (error) {
    console.error('Database Connection Error:', error.message);
    throw error; // Let the error be handled by the middleware
  }
};

// Handle connection errors
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
  isConnected = false;
});

mongoose.connection.on('disconnected', () => {
  console.log('MongoDB disconnected');
  isConnected = false;
});

// Handle process termination
process.on('SIGINT', async () => {
  await mongoose.connection.close();
  process.exit(0);
});

export default connectDB;