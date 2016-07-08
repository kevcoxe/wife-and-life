import React from "react";

import * as PostActions from "../actions/PostActions";
import PostStore from "../stores/PostStore";

export default class Home extends React.Component {
  constructor() {
    super();
    this.getPosts = this.getPosts.bind(this);
    this.state = {
      posts: PostStore.getAll(),
    };
  }

  componentWillMount() {
    PostStore.on("change", this.getPosts);
  }

  componentWillUnmount() {
    PostStore.removeListener("change", this.getPosts);
  }

  getPosts() {
    this.setState({
      posts: PostStore.getAll(),
    });
  }

  reloadPosts() {
    PostActions.reloadPosts();
  }

  render() {

    const { posts } = this.state;
    const postComponents = posts.map((post) => {
      return <li key={post.id}>{ post.title }</li>;
    });

    return (
      <div>
        <h1>Posts</h1>
        <ul>
          { postComponents }
        </ul>
        <br />
      </div>
    );
  }
}

