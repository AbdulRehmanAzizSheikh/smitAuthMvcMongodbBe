import express from "express";
import cors from "cors";
import morgan from "morgan";
import auth from "./routes/auth.js";
import users from "./routes/users.js";
import user from "./routes/user.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.use("/auth", auth);
app.use("/users", users);
app.use("/user", user);

export default app;
