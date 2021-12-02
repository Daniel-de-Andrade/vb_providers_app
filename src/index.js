import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import VbRoutes from "./routes/index";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <VbRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
