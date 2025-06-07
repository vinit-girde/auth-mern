import mongoose from "mongoose";

// Function to connect our datatbase using mongoose
export const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log("Mongo- DB Conneccted", connection?.connection?.port);
  } catch (error) {
    console.log("Error in connecting DB");
    process.exit(1); // code 1 is failure , 0 is success
  }
};
