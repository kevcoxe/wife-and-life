import React from "react";

import Posts from "../pages/Posts";
import Profile from "../pages/Profile";

export default class Home extends React.Component {

  render() {

    return (
      <div>
        <Profile />
        <Posts />
      </div>
    );
  }
}

