import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";

const { MONGO_CONNECTION, PORT_SERVER } = process.env;

mongoose
  .connect(MONGO_CONNECTION as string)
  .then(() => console.log("Connected to database!"));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "Hello!" });
});

app.listen(PORT_SERVER, () => {
  console.log("server started on port localhost:7000");
});

export { app };
