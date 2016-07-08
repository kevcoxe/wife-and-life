import React from "react";

import Navbar from "./Navbar";

export default class Layout extends React.Component {

  render() {
    const titleObj = {
      name: "Wife And Life",
      url: "/"
    };

    const linksObj = [
      {
        title: "Home",
        url: "/"
      },
      {
        title: "Profile",
        url: "profile"
      }
    ];

    return (
      <div>
        <Navbar title={titleObj} links={linksObj}/>
        <div className="col-md-offset-3">
          { this.props.children }
        </div>
      </div>
    );
  }
}

