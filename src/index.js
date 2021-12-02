import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import VbRoutes from './routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/mainMenu'

ReactDOM.render(
  <React.StrictMode>
    <VbRoutes />
    <MainMenu />
  </React.StrictMode>,
  document.getElementById("root")
);
