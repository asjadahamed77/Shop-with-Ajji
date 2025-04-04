import { v2 as cloudinary } from 'cloudinary'

const connectCloudinary = async () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET_KEY
    });
    console.log("Cloudinary connected successfully");
  } catch (error) {
    console.error("Cloudinary connection error:", error);
    // Don't throw the error to allow the application to continue
  }
}

export default connectCloudinary