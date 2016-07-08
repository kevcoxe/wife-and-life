
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import TodoList from "./pages/TodoList";
import Settings from "./pages/Settings";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={TodoList}></IndexRoute>
      <Route path="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
