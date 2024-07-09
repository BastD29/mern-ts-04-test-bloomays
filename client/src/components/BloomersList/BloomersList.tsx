import { FC, useEffect, useState } from "react";
import { useMissionContext } from "../../hooks/useMissionContext";
import { BloomerType } from "../../models/bloomer";
import { getMissions } from "../../services/missions";
import { SET_MISSIONS } from "../../constants/actions";
import { transformData } from "../../utils/transformData3";
import style from "./BloomersList.module.scss";

const BloomersList: FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [arriving, setArriving] = useState<Record<
    string,
    BloomerType[]
  > | null>(null);
  const [leaving, setLeaving] = useState<Record<string, BloomerType[]> | null>(
    null
  );

  const { dispatch } = useMissionContext();

  useEffect(() => {
    const fetchMissions = async () => {
      setIsLoading(true);

      try {
        const response = await getMissions();
        console.log("response:", response);

        if (response) {
          dispatch({ type: SET_MISSIONS, payload: response });
          // const filteredMissions: MissionType[] = filterDates(response);
          console.log("response:", response);

          const { arriving, leaving } = transformData(response);
          // const { arriving, leaving } = transformData(filteredMissions);
          console.log("arriving:", arriving);
          console.log("leaving:", leaving);

          setArriving(arriving);
          setLeaving(leaving);
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={style["bloomers-list"]}>
      <div className={style["bloomers-list__arriving"]}>
        <h2>Arriving bloomers</h2>
        {arriving &&
          Object.entries(arriving).map(([date, bloomers]) => (
            <div key={date}>
              <h2>{date}</h2>
              <ul>
                {bloomers.map((bloomer) => (
                  <li key={bloomer.id}>
                    {bloomer.firstname} {bloomer.lastname}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>

      <div className={style["bloomers-list__leaving"]}>
        <h2>Leaving bloomers</h2>
        {leaving &&
          Object.entries(leaving).map(([date, bloomers]) => (
            <div key={date}>
              <h2>{date}</h2>
              <ul>
                {bloomers.map((bloomer) => (
                  <li key={bloomer.id}>
                    {bloomer.firstname} {bloomer.lastname}
                  </li>
                ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BloomersList;
