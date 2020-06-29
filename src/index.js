import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import App from "App.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import PlayerPage from "views/PlayerPage/PlayerPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

let hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="sproutish/browse" component={LandingPage} />
      <Route path="sproutish/player/:videoId" component={PlayerPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={App} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
