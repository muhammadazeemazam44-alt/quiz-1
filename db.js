import mongoose from "mongoose";

const mongoURL = "mongodb://127.0.0.1:27017/myPET"; // use 127.0.0.1 instead of localhost for stability

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB successfully");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit the app if DB fails
  }
};

export default connectToMongo;
