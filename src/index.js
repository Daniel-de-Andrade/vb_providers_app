import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import vbRoutes from './routes/index'

ReactDOM.render(
  <React.StrictMode>
    <vbRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
