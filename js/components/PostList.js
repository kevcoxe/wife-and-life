
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import * as postActions from "../actions/PostActions";

@connect((store) => {
  return {
    posts: store.posts.posts
  };
})
export default class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { postCount } = this.props;
    if (postCount) {
      this.props.dispatch(postActions.getSomePosts(postCount));
    } else {
      this.props.dispatch(postActions.getPosts());
    }
  }

  componentDidUpdate(oldState, newState) {

  }

  render() {

    const { posts } = this.props;
    const { preview } = this.props;

    const postStyle = {
      image: {
        maxHeight: "400px",
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
      },
      smallPreview: {
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "-webkit-box",
        //lineHeight: "16px",
        maxHeight: "100px",
        WebkitLineClamp: "4",
        WebkitBoxOrient: "vertical"
      }
    };

    const postComponents = posts.map((post) => {

      let postsComponent = <div key={"post_lst_" + post.id}>
          <div className="well">
            <div className="row">
              <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <img src={post.mainPic} alt="Post Picture" className="img-thumbnail center-block" style={postStyle.image}/>
              </div>
              <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8" style={postStyle.post}>
                <h1><small>{ post.title }</small></h1>
                <p className="hidden-sm hidden-md hidden-lg" style={postStyle.previewSmall}>{ post.content }</p>
                <p className="hidden-xs" style={postStyle.preview}>{ post.content }</p>
                <Link to={`post/${post.id}`}>Read More</Link>
              </div>
            </div>
          </div>
        </div>;

      if (preview) {
        postsComponent = <li key={"post_lst_" + post.id}><Link to={`post/${post.id}`}><h1><small>{ post.title }</small></h1></Link></li>;
      }

      return postsComponent;
    });

    return (
      <div>
        { postComponents }
      </div>
    );
  }
}
