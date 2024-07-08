type MissionType = {
  _id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: FreelanceType;
};

type FreelanceType = {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
};

type MissionStateType = {
  missions: MissionType[] | null;
};

export type { MissionType, MissionStateType };
