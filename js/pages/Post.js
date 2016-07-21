import React from "react";
import { connect } from "react-redux";

import * as PostActions from "../actions/PostActions";

import Post from "../components/Post";

export default class PostPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { postId } = this.props.params;
  }

  componentDidUpdate(oldState, newState) {

  }

  render() {

    const { postId } = this.props.params;

    return (
      <div className="row col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-12 col-md-10 col-lg-8">
        <Post id={postId}/>
      </div>
    );
  }
}

