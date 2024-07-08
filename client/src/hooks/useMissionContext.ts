import { useContext } from "react";
import { MissionContext } from "../context/MissionContext/MissionContext";

export const useMissionContext = () => {
  const context = useContext(MissionContext);

  if (!context) {
    throw new Error("useMissionContext must be used within an MissionProvider");
  }

  return context;
};
