// "use server"
// import mongoose from 'mongoose';

// const connectDB = async () => {

// await mongoose.connect("mongodb://localhost:27017/MakeMeToCode")

// console.log("connected to mongoDB")
// console.log("mongodb://localhost:27017/MakeMeToCode")
// }

// export default connectDB;

"use server"
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/MakeMeToCode');
    // await mongoose.connect('mongodb+srv://vimalkumar200713:ri0wXA6pisW3fXrP@cluster.x5vqvcz.mongodb.net/');
    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1); // Exit process on connection failure
  }
};

export default connectDB;