import dispatcher from "../dispatcher";

var DB = require('json!../../data.json');

export function reloadProfile() {
  dispatcher.dispatch({type: "FETCH_PROFILE"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_PROFILE", profile: DB.profile});
  }, 1000);

}
