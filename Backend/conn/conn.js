import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

const conn = async () => {
  try {
    await mongoose.connect(process.env.URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database is connected");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

export default conn;
