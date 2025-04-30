import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected Successfully");
  } catch (error) {
    console.log("unable to connect", error);

    process.exit(1);
    // 1 is unsuccesfull
    // 0 is successful
  }
};

export default connectDB;
