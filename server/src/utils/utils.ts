// import {
//   IMission,
//   MissionData,
//   MissionQuery,
//   MissionRecords,
// } from "../types/mission";

// const buildDateQuery = (beginDate?: string, endDate?: string): MissionQuery => {
//   const query: MissionQuery = {};
//   if (beginDate) query.beginDate = { $gte: beginDate };
//   if (endDate) query.endDate = { $lte: endDate };
//   console.log("query:", query);

//   return query;
// };

// const processMissions = (
//   missions: IMission[]
// ): { arriving: MissionRecords; leaving: MissionRecords } => {
//   const arriving: MissionRecords = {};
//   const leaving: MissionRecords = {};

//   missions.forEach((mission: IMission) => {
//     const begin = mission.beginDate;
//     const end = mission.endDate;
//     const missionData: MissionData = {
//       firstname: mission.freelance.firstname,
//       lastname: mission.freelance.lastname,
//       beginMission: mission.beginDate,
//       endMission: mission.endDate,
//       id: mission._id.toString(),
//     };

//     if (!arriving[begin]) arriving[begin] = [];
//     arriving[begin].push(missionData);

//     if (!leaving[end]) leaving[end] = [];
//     leaving[end].push(missionData);
//   });

//   return { arriving, leaving };
// };

// export { buildDateQuery, processMissions };
