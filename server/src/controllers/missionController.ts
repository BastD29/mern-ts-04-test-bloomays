// import { Request, Response } from "express";
// import Mission from "../models/missionModel";

// const getMissions = async (req: Request, res: Response) => {
//   try {
//     const missions = await Mission.find();
//     res.status(200).json(missions);
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

// // const createMissions = async (req: Request, res: Response) => {
// //   const missions = req.body.missions;
// //   console.log("missions:", missions);

// //   if (!missions || !Array.isArray(missions)) {
// //     return res.status(400).json({ error: "Invalid missions data." });
// //   }
// //   try {
// //     const newMissions = await Mission.insertMany(missions);
// //     res.status(201).json(newMissions);
// //   } catch (error) {
// //     res.status(500).json({ error: "Error creating missions." });
// //   }
// // };

// export { getMissions, createMission /* createMissions */ };
