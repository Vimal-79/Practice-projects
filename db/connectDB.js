
"use server"
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    // In serverless environments (Netlify functions, Vercel), calling process.exit
    // will terminate the function host and cause the function to crash.
    // Re-throw the error so the caller can handle it or NextAuth can respond
    // with a proper sign-in failure instead of crashing the runtime.
    throw error;
  }
};

export default connectDB;