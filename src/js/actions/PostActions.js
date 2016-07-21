export function getTopFive() {
  return {type: "FETCH_TOP_POSTS_FULFILLED"};
}

export function getPosts() {
  return {type: "FETCH_POSTS_FULFILLED"};
}

export function getSomePosts(count) {
  return {type: "FETCH_SOME_POSTS_FULFILLED", payload: count};
}

export function getPost(id) {
  return {type: "FETCH_POST_FULFILLED", payload: id};
}
