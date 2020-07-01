import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { HashRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import App from "App.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import PlayerPage from "views/PlayerPage/PlayerPage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

let hist = createBrowserHistory();

ReactDOM.render(
  <HashRouter history={hist}>
    <Switch>
      <Route path="/browse" component={LandingPage} />
      <Route path="/player/:videoId" component={PlayerPage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/" component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
