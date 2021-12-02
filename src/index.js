import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainMenu from './components/mainMenu'
import VbRoutes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <VbRoutes />
    <MainMenu />
  </React.StrictMode>,
  document.getElementById("root")
);
