import express, { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser = require("body-parser");
import logger from "./logger/logger";
import connectDB from "./config/db";
import userRoutes from './routes/authRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.json({ limit: "10mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "10mb",
    extended: true,
  })
);

app.use(
  cors({
    origin: process.env.NODE_ENV || "*",
  })
);

app.use('/', userRoutes);
app.use('/', productRoutes);

// Basic Route
app.get("/", (req: Request, res: Response) => {
  res.send("E-Commerce Platform with Advanced Features");
});

// Start the server :

app.listen(PORT, async () => {
  try {
    await connectDB();
    logger.info(`Connected to the DB ! and Server is running on PORT ${PORT}`);
  } catch (error) {
    console.error(error);
  }
});
