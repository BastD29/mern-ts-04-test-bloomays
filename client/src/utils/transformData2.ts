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

//   const today = new Date();
//   const endOfNextMonth = new Date(
//     today.getUTCFullYear(),
//     today.getUTCMonth() + 2,
//     0
//   );

//   // Normalize dates to UTC to remove any time component and timezone issues
//   const normalizeDate = (date: Date) => {
//     const normalized = new Date(
//       Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())
//     );
//     return normalized;
//   };

//   const normalizedToday = normalizeDate(today);
//   const normalizedEndOfNextMonth = normalizeDate(endOfNextMonth);

//   console.log("Normalized Today:", normalizedToday.toISOString().split("T")[0]);
//   console.log(
//     "Normalized End of Next Month:",
//     normalizedEndOfNextMonth.toISOString().split("T")[0]
//   );

//   missions.forEach((mission) => {
//     const arrivalDate = normalizeDate(new Date(mission.beginDate));
//     const departureDate = normalizeDate(new Date(mission.endDate));

//     console.log("Processing mission:", mission.label);
//     console.log(
//       "Normalized Arrival Date:",
//       arrivalDate.toISOString().split("T")[0]
//     );
//     console.log(
//       "Normalized Departure Date:",
//       departureDate.toISOString().split("T")[0]
//     );

//     if (
//       arrivalDate >= normalizedToday &&
//       arrivalDate <= normalizedEndOfNextMonth
//     ) {
//       const bloomer: BloomerType = {
//         firstname: mission.freelance.firstname,
//         lastname: mission.freelance.lastname,
//         beginMission: mission.beginDate,
//         endMission: mission.endDate,
//         id: mission.freelance.email, // Assuming email is unique since `_id` is not present
//       };

//       const arrivalDateString = arrivalDate.toISOString().split("T")[0];
//       console.log("arrivalDateString:", arrivalDateString);
//       if (!arriving[arrivalDateString]) {
//         arriving[arrivalDateString] = [];
//       }
//       arriving[arrivalDateString].push(bloomer);
//     }

//     if (
//       departureDate >= normalizedToday &&
//       departureDate <= normalizedEndOfNextMonth
//     ) {
//       const bloomer: BloomerType = {
//         firstname: mission.freelance.firstname,
//         lastname: mission.freelance.lastname,
//         beginMission: mission.beginDate,
//         endMission: mission.endDate,
//         id: mission.freelance._id,
//       };

//       const departureDateString = departureDate.toISOString().split("T")[0];
//       console.log("departureDateString:", departureDateString);
//       if (!leaving[departureDateString]) {
//         leaving[departureDateString] = [];
//       }
//       leaving[departureDateString].push(bloomer);
//     }
//   });

//   console.log("Arriving bloomers:", arriving);
//   console.log("Leaving bloomers:", leaving);

//   return { arriving, leaving };
// };

// export { transformData };
