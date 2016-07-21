
import React from "react";
import { Link } from "react-router";

import * as postActions from "../actions/PostActions";

import PostList from "./PostList";

export default class LatestPosts extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }

  componentDidUpdate(oldState, newState) {

  }

  render() {

    const postCount = 3;

    return (
      <div>
        <h1>Latest Posts</h1>
        <PostList postCount={postCount} />
        <br />
      </div>
    );
  }
}
