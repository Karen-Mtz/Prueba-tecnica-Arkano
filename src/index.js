import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import Dash from "./comp/Dash";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";
import App from './App'
import Create from "./comp/Create";

ReactDOM.render(
  <Router>
    <div>
      <Dash />

    </div>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
