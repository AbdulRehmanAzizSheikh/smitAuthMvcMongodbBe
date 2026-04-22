import express from "express";
import { singleUser } from "../controllers/users.js";
const router = express.Router();

router.get("/:username", singleUser);

export default router;
