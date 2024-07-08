import { Request, Response } from "express";
import Mission from "../models/missionModel";
import {
  IMission,
  MissionData,
  MissionQuery,
  MissionRecords,
} from "../types/mission";

const getMissions = async (req: Request, res: Response) => {
  try {
    const { beginDate, endDate } = req.query;
    console.log("req.query:", req.query);

    const query: MissionQuery = {};
    console.log("query:", query);

    if (beginDate) {
      query.beginDate = { $gte: beginDate as string };
    }

    if (endDate) {
      query.endDate = { $lte: endDate as string };
    }

    const missions = await Mission.find(query);
    // console.log("missions:", missions);

    const arriving: MissionRecords = {};
    const leaving: MissionRecords = {};

    missions.forEach((mission: IMission) => {
      const begin = mission.beginDate;
      const end = mission.endDate;
      const missionData: MissionData = {
        firstname: mission.freelance.firstname,
        lastname: mission.freelance.lastname,
        beginMission: mission.beginDate,
        endMission: mission.endDate,
        id: mission._id.toString(),
      };

      console.log("missionData:", missionData);

      if (!arriving[begin]) {
        arriving[begin] = [];
      }
      arriving[begin].push(missionData);

      if (!leaving[end]) {
        leaving[end] = [];
      }
      leaving[end].push(missionData);
    });

    res.status(200).json({ arriving, leaving });
  } catch (error) {
    res.status(500).json({ error: "Error fetching missions." });
  }
};

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
