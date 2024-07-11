import express from "express";
import { createMission, getMissions } from "../controllers/missionController";

const router = express.Router();

router.get("/", getMissions);
router.post("/", createMission); // only for Postman testing purpose

export default router;
