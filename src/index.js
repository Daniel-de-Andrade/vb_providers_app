import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
// import MainMenu from './components/mainMenu'
import VbRoutes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";
=======
import VbRoutes from './routes/index'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from './components/mainMenu'
>>>>>>> andre

ReactDOM.render(
  <React.StrictMode>
    <VbRoutes />
    {/* <MainMenu /> */}
  </React.StrictMode>,
  document.getElementById("root")
);
