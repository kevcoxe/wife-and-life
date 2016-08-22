
import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import { Provider } from "react-redux";

// stores
import store from "./js/store";

// components
import Layout from "./js/components/Layout";

// pages
import Home from "./js/pages/Home";
import Posts from "./js/pages/Posts";
import PostPage from "./js/pages/Post";
import Profile from "./js/pages/Profile";

const app = document.getElementById('view');

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Layout}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="posts" component={Posts}></Route>
        <Route path="post/:postId" component={PostPage}></Route>
        <Route path="profile" component={Profile}></Route>
      </Route>
    </Router>
  </Provider>,
app);
