import { FC, ReactNode, useReducer } from "react";
import {
  initialMissionState,
  missionReducer,
} from "../../reducers/missionReducer";
import { MissionContext } from "./MissionContext";

type MissionProviderProps = {
  children: ReactNode;
};

export const MissionProvider: FC<MissionProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(missionReducer, initialMissionState);

  // console.log("initialMissionState:", initialMissionState);

  return (
    <MissionContext.Provider value={{ state, dispatch }}>
      {children}
    </MissionContext.Provider>
  );
};
