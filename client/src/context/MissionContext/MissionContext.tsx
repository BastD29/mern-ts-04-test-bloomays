import { Context, Dispatch, createContext } from "react";
import { MissionStateType } from "../../models/mission";
import { MissionActionType } from "../../models/action";

type MissionContextType = {
  state: MissionStateType;
  dispatch: Dispatch<MissionActionType>;
};

export const MissionContext: Context<MissionContextType | undefined> =
  createContext<MissionContextType | undefined>(undefined);
