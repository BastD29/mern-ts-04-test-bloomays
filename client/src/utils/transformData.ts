import { BloomerType } from "../models/bloomer";
import { MissionType } from "../models/mission";
import { addBloomerToRecord } from "./addBloomerToRecord";
import { createBloomer } from "./createBloomer";
import { normalizeDate } from "./normalizeDate";

const transformData = (
  missions: MissionType[]
): {
  arriving: Record<string, BloomerType[]>;
  leaving: Record<string, BloomerType[]>;
} => {
  const arriving: Record<string, BloomerType[]> = {};
  const leaving: Record<string, BloomerType[]> = {};

  const today = new Date();
  const endOfNextMonth = new Date(
    today.getUTCFullYear(),
    today.getUTCMonth() + 2,
    0
  );

  const normalizedToday = normalizeDate(today.toISOString());
  const normalizedEndOfNextMonth = normalizeDate(endOfNextMonth.toISOString());

  // console.log("Normalized Today:", normalizedToday);
  // console.log("Normalized End of Next Month:", normalizedEndOfNextMonth);

  missions.forEach((mission) => {
    const arrivalDate = normalizeDate(mission.beginDate);
    const departureDate = normalizeDate(mission.endDate);

    // console.log("Processing mission:", mission.label);
    // console.log("Normalized Arrival Date:", arrivalDate);
    // console.log("Normalized Departure Date:", departureDate);

    const bloomer = createBloomer(mission);

    if (
      arrivalDate >= normalizedToday &&
      arrivalDate <= normalizedEndOfNextMonth
    ) {
      // console.log("arrivalDateString:", arrivalDate);
      addBloomerToRecord(arriving, arrivalDate, bloomer);
    }

    if (
      departureDate >= normalizedToday &&
      departureDate <= normalizedEndOfNextMonth
    ) {
      // console.log("departureDateString:", departureDate);
      addBloomerToRecord(leaving, departureDate, bloomer);
    }
  });

  // console.log("Arriving bloomers:", arriving);
  // console.log("Leaving bloomers:", leaving);

  return { arriving, leaving };
};

export { transformData };
