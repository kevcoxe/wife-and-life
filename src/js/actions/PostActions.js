import dispatcher from "../dispatcher";

var DB = require('json!../../data.json');

export function reloadPosts() {
  dispatcher.dispatch({type: "FETCH_POSTS"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_POSTS", posts: DB.posts});
  }, 1000);

}
