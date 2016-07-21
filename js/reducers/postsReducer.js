var _ = require("lodash");

var DB = require('json!../../data/data.json');

export default function reducer(state={
  fetching: false,
  fetched: false,
  posts: [],
  post: {},
  error: null
}, action) {
  switch(action.type) {
    /*
     * Get posts
     */
    case "FETCH_POSTS_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_POSTS_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_POSTS_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        posts: DB.posts
      };
      break;
    }

    /*
     * Get some posts
     */
    case "FETCH_SOME_POSTS_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_SOME_POSTS_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_SOME_POSTS_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        posts: [...DB.posts].slice(0, action.payload)
      };
      break;
    }

    /*
     * Get top posts
     */
    case "FETCH_TOP_POSTS_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_TOP_POSTS_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_TOP_POSTS_FULFILLED": {
      return {...state,
        fetching: false,
        fetched: false,
        posts: [...DB.posts].slice(0,5)
      };
      break;
    }

    /*
     * Get post
     */
    case "FETCH_POST_PENDING": {
      return {...state,
        fetching: true
      };
      break;
    }
    case "FETCH_POST_REJECTED": {
      return {...state,
        fetching: false,
        error: action.payload
      };
      break;
    }
    case "FETCH_POST_FULFILLED": {

      let post = _.find(DB.posts, {"id": action.payload});

      return {...state,
        fetching: false,
        fetched: false,
        post: post
      };
      break;
    }

  }
  return state;
}
