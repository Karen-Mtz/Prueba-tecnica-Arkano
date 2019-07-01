import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import Dash from "./comp/Dash";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={Dash} />
      <Route path="/dashboard" component={App} />
    </div>
  </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
