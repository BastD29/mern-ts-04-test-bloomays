import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db";
import missionRoutes from "./routes/missionRoutes";

connectDB();

const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ origin: process.env.ORIGIN }));
app.use(express.json());
app.use("/api/missions", missionRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
