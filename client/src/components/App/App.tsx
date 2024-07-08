import { FC } from "react";
import MissionsList from "../MissionsList/MissionsList";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <MissionsList />
    </div>
  );
};

export default App;
