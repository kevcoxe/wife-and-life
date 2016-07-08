import React from "react";

import * as PostActions from "../actions/PostActions";
import PostStore from "../stores/PostStore";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.getPost = this.getPost.bind(this);
    this.state = {
      post: PostStore.getPost(this.props.params.postId),
    };
    console.log(this.state.post);
  }

  getPost(id) {
    this.setState({
      post: PostStore.getPost(id),
    });
  }

  render() {

    const { postId } = this.props.params;
    const { post } = this.state;

    return (
      <div>
        <h1>{post.title}</h1>
        <br />
        <p>{ post.content }</p>
        <br />
      </div>
    );
  }
}

