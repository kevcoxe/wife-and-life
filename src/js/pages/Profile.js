
import React from "react";
import { connect } from "react-redux";

import Jumbotron from "../components/Jumbotron.js";

import * as ProfileActions from "../actions/ProfileActions";

@connect((store) => {
  return {
    profile: store.profile.profile
  };
})
export default class Profile extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.dispatch(ProfileActions.getProfile());
  }

  componentDidUpdate(oldState, newState) {

  }

  render() {

    const { profile } = this.props;

    return (
      <div>
        <Jumbotron title={profile.name} content={profile.bio} />
      </div>
    );
  }
}
