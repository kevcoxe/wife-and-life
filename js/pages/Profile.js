
import React from "react";
import { connect } from "react-redux";

import Biotron from "../components/Biotron";
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

    const profileStyle = {
      image: {
        maxHeight: "600px",
        maxWidth: "100%"
      },
      info: {
        minHeight: "100%",
      },
      bio: {
        whiteSpace: "normal",
        wordWrap: "break-word"
      }
    };

    return (
      <div>
        <div className="col-sm-4 col-md-4 col-lg-4">
          <img src={profile.pic} alt="Post Picture" className="img-thumbnail center-block" style={profileStyle.image}/>
        </div>

        <div className="col-sm-8 col-md-8 col-lg-8">
          <div className="well" style={profileStyle.info}>
              <h1>{ profile.name }</h1>
              <p style={profileStyle.bio}>{ profile.bio }</p>
          </div>
        </div>

      </div>
    );
  }
}
