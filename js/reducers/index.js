
import { combineReducers } from "redux";

import profile from "./profileReducer";
import posts from "./postsReducer";

export default combineReducers({
  profile,
  posts
})
