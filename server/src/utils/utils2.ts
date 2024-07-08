import { IMission, MissionData, MissionRecords } from "../types/mission";

const formatMissionData = (mission: IMission): MissionData => ({
  firstname: mission.freelance.firstname,
  lastname: mission.freelance.lastname,
  beginMission: mission.beginDate,
  endMission: mission.endDate,
  id: mission._id.toString(),
});

const categorizeMissions = (missions: IMission[]) => {
  const arriving: MissionRecords = {};
  const leaving: MissionRecords = {};

  missions.forEach((mission: IMission) => {
    const begin = mission.beginDate;
    const end = mission.endDate;
    const missionData = formatMissionData(mission);

    if (!arriving[begin]) arriving[begin] = [];
    arriving[begin].push(missionData);

    if (!leaving[end]) leaving[end] = [];
    leaving[end].push(missionData);
  });

  return { arriving, leaving };
};

export { categorizeMissions };
