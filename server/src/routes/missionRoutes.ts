import express from "express";
import { createMission, getMissions } from "../controllers/missionController5";

const router = express.Router();

router.get("/", getMissions);
router.post("/", createMission);

export default router;
