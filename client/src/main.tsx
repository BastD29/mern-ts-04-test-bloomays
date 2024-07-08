import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App";
import { MissionProvider } from "./context/MissionContext/MissionProvider";
import "./style/index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MissionProvider>
      <App />
    </MissionProvider>
  </React.StrictMode>
);
