import { FC } from "react";
import BloomersList from "../BloomersList/BloomersList";
import style from "./App.module.scss";

const App: FC = () => {
  return (
    <div className={style["app"]}>
      <BloomersList />
    </div>
  );
};

export default App;
