import dispatcher from "../dispatcher";

export function reloadPosts() {
  dispatcher.dispatch({type: "FETCH_POSTS"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_POSTS", posts: []});
  }, 1000);

}
