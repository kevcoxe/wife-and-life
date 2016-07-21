import React from "react";
import { Link } from "react-router";

import * as PostActions from "../actions/PostActions";

import PostList from "../components/PostList";

export default class Posts extends React.Component {
  constructor() {
    super();
  }

  render() {

    return (
      <div className="row col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-12 col-md-10 col-lg-8">
        <h1>Posts</h1>
        <PostList />
        <br />
      </div>
    );
  }
}

