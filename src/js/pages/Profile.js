
import React from "react";

import Jumbotron from "../components/Jumbotron.js";

import * as UserActions from "../actions/UserActions";
import UserStore from "../stores/UserStore";

export default class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      profile: UserStore.getUser(),
    };
  }

  render() {

    const { profile } = this.state;

    return (
      <div>
        <Jumbotron title={profile.name} content={profile.bio} />
      </div>
    );
  }
}
