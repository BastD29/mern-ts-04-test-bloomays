import express from "express";
import {
  createMission,
  //   createMissions,
  getMissions,
} from "../controllers/missionController2";

const router = express.Router();

router.get("/", getMissions);
router.post("/", createMission);
// router.post("/", createMissions);

export default router;
