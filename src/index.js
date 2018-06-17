import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Userlist from "./container/Userlist";
import Card from "./components/userCard";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route exact path="/" component={App}>
      <IndexRoute component={Userlist} type="all" />
      <Route exact path="/atendidos" component={Userlist} type="done" />
      <Route exact path="/lixeira" component={Userlist} type="trash" />
    </Route>
    <Route path="/usuario/:username" component={Card} />
  </Router>,
  document.getElementById("root")
);
registerServiceWorker();
