import { FC, useEffect, useState } from "react";
import { useMissionContext } from "../../hooks/useMissionContext";
import { getMissions } from "../../services/missions";
import { SET_MISSIONS } from "../../constants/actions";
import style from "./MissionsList.module.scss";

const MissionsList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const {
    state: { missions },
    dispatch,
  } = useMissionContext();

  useEffect(() => {
    const fetchMissions = async () => {
      setIsLoading(true);

      try {
        const response = await getMissions();
        console.log("response:", response);

        if (response) {
          dispatch({ type: SET_MISSIONS, payload: response });
        } else {
          setError("Failed to fetch missions.");
        }
      } catch (error) {
        setError("Failed to fetch missions.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchMissions();
  }, []);

  return (
    <div className={style["missions-list"]}>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!isLoading && !error && missions && missions.length > 0 ? (
        <ul>
          {missions.map((mission) => (
            <li key={mission._id}>{mission.beginDate}</li>
          ))}
        </ul>
      ) : (
        !isLoading && !error && <p>No mission found</p>
      )}
    </div>
  );
};

export default MissionsList;
