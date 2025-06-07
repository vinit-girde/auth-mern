import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDb.js";

const app = express();

dotenv.config();

// Routes
// app.use("api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello World...!!!");
});
app.listen(3000, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
