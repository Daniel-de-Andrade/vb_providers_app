import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import VbRoutes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import MainMenu from './components/mainMenu'
import VbRoutes from './routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> 558fae3dfb9c3128fde56de510694daf812f822b

ReactDOM.render(
  <React.StrictMode>
    <VbRoutes />
    <MainMenu />
  </React.StrictMode>,
  document.getElementById("root")
);
