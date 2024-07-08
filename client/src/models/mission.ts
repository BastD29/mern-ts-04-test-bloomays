type MissionType = {
  _id: string;
  label: string;
  beginDate: string;
  endDate: string;
  missionType: string;
  freelance: Freelance;
};

type Freelance = {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
};

type MissionStateType = {
  missions: MissionType[] | null;
};

export type { MissionType, MissionStateType };
