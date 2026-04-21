import express from "express";
import cors from "cors";
import morgan from "morgan";
import auth from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", auth);

export default app;
