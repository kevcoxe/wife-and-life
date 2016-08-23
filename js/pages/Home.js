import React from "react";

import LatestPosts from "../components/LatestPosts";
import Biotron from "../components/Biotron";

export default class Home extends React.Component {

  render() {

    return (
      <div className="row col-xs-offset-0 col-sm-offset-0 col-md-offset-1 col-lg-offset-2 col-xs-12 col-sm-12 col-md-10 col-lg-8">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <Biotron />
          <LatestPosts />
        </div>
      </div>
    );
  }
}

