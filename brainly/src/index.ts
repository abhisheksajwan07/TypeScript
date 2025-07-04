import express, { Request, Response } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { connectDB } from "./config/database";
import authRoutes from "./routes/auth.routes";
import contentRoutes from "./routes/content.routes";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// const MONGO_URI = process.env.MONGO_URI;

app.use(express.json());

app.use("/api/v1", authRoutes);
app.use("/api/v1", contentRoutes);
const startServer = async () => {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
};

startServer();
