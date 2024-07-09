import { BloomerType } from "../models/bloomer";
import { MissionType } from "../models/mission";

// Utility function to create a bloomer object
const createBloomer = (mission: MissionType): BloomerType => ({
  firstname: mission.freelance.firstname,
  lastname: mission.freelance.lastname,
  beginMission: mission.beginDate,
  endMission: mission.endDate,
  id: mission.freelance._id,
});

export { createBloomer };
