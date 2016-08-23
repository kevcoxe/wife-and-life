
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import * as PostActions from "../actions/PostActions";

@connect((store) => {
  return {
    post: store.posts.post
  };
})
export default class Post extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props;
    this.props.dispatch(PostActions.getPost(id));
  }

  componentDidUpdate(oldState, newState) {

  }

  render() {

    const { post } = this.props;
    const postStyle = {
      image: {
        maxHeight: "600px",
        maxWidth: "100%"
      },
      post: {
        maxHeight: "200px"
      },
      preview: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        //lineHeight: "16px",
        maxHeight: "100%",
        WebkitLineClamp: "10",
        WebkitBoxOrient: "vertical"
      }
    };

    return (
      <div>
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <img src={post.mainPic} alt="Post Picture" className="img-thumbnail center-block" style={postStyle.image}/>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <h1><small>{ post.title }</small></h1>
          </div>
        </div>

        <div className="row">
          <p>{ post.content }</p>
          <br/>
          <br/>
        </div>
      </div>
    );
  }
}
