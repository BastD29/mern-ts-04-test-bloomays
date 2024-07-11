import { Request, Response } from "express";
import Mission from "../models/missionModel";

const getMissions = async (req: Request, res: Response) => {
  try {
    const missions = await Mission.find();
    res.status(200).json(missions);
  } catch (error) {
    res.status(500).json({ error: "Error fetching missions." });
  }
};

// only for Postman testing purpose
const createMission = async (req: Request, res: Response) => {
  try {
    const { label, beginDate, endDate, missionType, freelance } = req.body;

    if (!label || !beginDate || !endDate || !missionType || !freelance) {
      return res.status(400).json({ error: "All fields are required." });
    }

    const newMission = new Mission({
      label,
      beginDate,
      endDate,
      missionType,
      freelance,
    });

    const savedMission = await newMission.save();
    res.status(201).json(savedMission);
  } catch (error) {
    res.status(500).json({ error: "Error creating mission." });
  }
};

export { getMissions, createMission };
