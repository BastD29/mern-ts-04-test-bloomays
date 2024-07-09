// import { MissionType } from "../models/mission";

// const filterDates = (missions: MissionType[]): MissionType[] => {
//   const today = new Date();
//   console.log("today:", today);

//   const lastDayOfNextMonth = new Date(
//     today.getFullYear(),
//     today.getMonth() + 2,
//     0
//   );
//   console.log("endOfNextMonth:", lastDayOfNextMonth);

//   return missions.filter((mission) => {
//     const beginDate = new Date(mission.beginDate);
//     const endDate = new Date(mission.endDate);

//     return (
//       (beginDate >= today && beginDate <= lastDayOfNextMonth) ||
//       (endDate >= today && endDate <= lastDayOfNextMonth)
//     );
//   });
// };

// export { filterDates };
