import { SET_MISSIONS } from "../constants/actions";
import { MissionType } from "./mission";

type SetMissionActionType = {
  type: typeof SET_MISSIONS;
  payload: MissionType[];
};

type MissionActionType = SetMissionActionType;

export type { MissionActionType };
