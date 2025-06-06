import express from "express";
import mongoose from "mongoose";
import { usersRoutes } from "./routes/usersRoutes.js";
import cors from 'cors';
const port = process.env.PORT || 8080;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/userScore", usersRoutes);
mongoose
  .connect(process.env.DB_URI, { dbName: "scores" })
  .then(() => {
    console.log("connected to DB successfully");
    app.listen(port, () => console.log(`Listening to port ${port}...`));
  })
  .catch((err) => console.log(err));
