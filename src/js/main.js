
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Profile from "./pages/Profile";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="posts" component={Posts}></Route>
      <Route path="post/:postId" component={Post}></Route>
      <Route path="profile" component={Profile}></Route>
    </Route>
  </Router>,
app);
