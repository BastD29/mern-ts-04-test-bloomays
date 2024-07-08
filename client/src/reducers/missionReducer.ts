import { SET_MISSIONS } from "../constants/actions";
import { MissionActionType } from "../models/action";
import { MissionStateType } from "../models/mission";

const initialMissionState: MissionStateType = {
  missions: null,
};

const missionReducer = (
  state: MissionStateType,
  action: MissionActionType
): MissionStateType => {
  switch (action.type) {
    case SET_MISSIONS:
      return {
        missions: action.payload,
      };
    default:
      return state;
  }
};

export { missionReducer, initialMissionState };
