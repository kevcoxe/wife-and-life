import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

var DB = require('json!../../data.json');

class UserStore extends EventEmitter {
  constructor() {
    super()

    this.profile = DB.profile

  }

  getUser() {
    return this.profile;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECIEVE_PROFILE": {
        this.profile = action.profile;
        this.emit("change");
      }
    }
  }


}

const userStore = new UserStore;
dispatcher.register(userStore.handleActions.bind(userStore));

window.dispatcher = dispatcher;

export default userStore;


