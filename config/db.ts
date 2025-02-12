import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL as string);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;
