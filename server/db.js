import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = "mongodb+srv://zainarfeen87:HiZtOQh2yYmpBuOa@gather-meet.2onmfyk.mongodb.net/";


mongoose.connect(uri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
    // process.exit(1);
  });

export default mongoose;