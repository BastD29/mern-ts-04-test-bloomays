// import { Request, Response } from "express";
// import Mission from "../models/missionModel";
// import { buildDateQuery, processMissions } from "../utils/utils";

// const getMissions = async (req: Request, res: Response) => {
//   try {
//     const { beginDate, endDate } = req.query;
//     console.log("req.query:", req.query);
//     console.log("beginDate:", beginDate);
//     console.log("endDate:", endDate);

//     const query = buildDateQuery(beginDate as string, endDate as string);
//     console.log("query:", query);

//     const missions = await Mission.find(query);
//     const { arriving, leaving } = processMissions(missions);

//     res.status(200).json({ arriving, leaving });
//   } catch (error) {
//     res.status(500).json({ error: "Error fetching missions." });
//   }
// };

// const createMission = async (req: Request, res: Response) => {
//   try {
//     const { label, beginDate, endDate, missionType, freelance } = req.body;

//     if (!label || !beginDate || !endDate || !missionType || !freelance) {
//       return res.status(400).json({ error: "All fields are required." });
//     }

//     const newMission = new Mission({
//       label,
//       beginDate,
//       endDate,
//       missionType,
//       freelance,
//     });

//     const savedMission = await newMission.save();
//     res.status(201).json(savedMission);
//   } catch (error) {
//     res.status(500).json({ error: "Error creating mission." });
//   }
// };

// export { getMissions, createMission };
