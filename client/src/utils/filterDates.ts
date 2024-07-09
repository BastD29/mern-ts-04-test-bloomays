// import moment from "moment";
// import { MissionType } from "../models/mission";

// const filterDates = (missions: MissionType[]): MissionType[] => {
//   const today = moment();
//   console.log("today:", today);

//   const endOfNextMonth = moment().add(1, "months").endOf("month");
//   console.log("endOfNextMonth:", endOfNextMonth);

//   return missions.filter((mission) => {
//     const beginDate = moment(mission.beginDate);
//     const endDate = moment(mission.endDate);

//     return (
//       beginDate.isBetween(today, endOfNextMonth, undefined, "[]") ||
//       endDate.isBetween(today, endOfNextMonth, undefined, "[]")
//     );
//   });
// };

// export { filterDates };
