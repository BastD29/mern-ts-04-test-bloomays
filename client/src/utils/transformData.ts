// import { BloomerType } from "../models/bloomer";
// import { MissionType } from "../models/mission";

// const transformData = (
//   missions: MissionType[]
// ): {
//   arriving: Record<string, BloomerType[]>;
//   leaving: Record<string, BloomerType[]>;
// } => {
//   const arriving: Record<string, BloomerType[]> = {};
//   const leaving: Record<string, BloomerType[]> = {};

//   // console.log("missions:", missions);

//   missions.forEach((mission) => {
//     const arrivalDate = mission.beginDate;
//     const departureDate = mission.endDate;

//     const bloomer: BloomerType = {
//       firstname: mission.freelance.firstname,
//       lastname: mission.freelance.lastname,
//       beginMission: mission.beginDate,
//       endMission: mission.endDate,
//       id: mission.freelance._id,
//     };
//     console.log("bloomer:", bloomer);

//     if (!arriving[arrivalDate]) {
//       arriving[arrivalDate] = [];
//     }
//     arriving[arrivalDate].push(bloomer);

//     if (!leaving[departureDate]) {
//       leaving[departureDate] = [];
//     }
//     leaving[departureDate].push(bloomer);
//   });

//   return { arriving, leaving };
// };

// export { transformData };
