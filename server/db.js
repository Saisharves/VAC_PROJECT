import mongoose from "mongoose";

const connectDB = async () => {
  try {
await mongoose.connect(process.env.MONGO_URL || "mongodb+srv://sibi:MeuYCbR6iEUnptJi @cluster0.3az1wjg.mongodb.net/?retryWrites=true&w=majority");
    console.log("connected to MONGODB");
  } catch (err) {
    throw err;
  }
};

export default connectDB;
