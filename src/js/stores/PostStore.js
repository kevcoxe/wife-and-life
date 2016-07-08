import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

var DB = require('json!../../data.json');

class PostStore extends EventEmitter {
  constructor() {
    super()

    this.posts = DB.posts

  }

  getAll() {
    return this.posts;
  }

  getPost(id) {
    return this.posts.filter((post) => {
      return post.id.toString() === id;
    })[0];
  }

  handleActions(action) {
    switch(action.type) {
      case "RECIEVE_POSTS": {
        this.posts = action.posts;
        this.emit("change");
      }
    }
  }


}

const postStore = new PostStore;
dispatcher.register(postStore.handleActions.bind(postStore));

window.dispatcher = dispatcher;

export default postStore;


