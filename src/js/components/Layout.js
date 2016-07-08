import React from "react";

import Navbar from "./Navbar";

export default class Layout extends React.Component {

  render() {
    const titleObj = {
      name: "Todos",
      url: "/"
    };

    const linksObj = [
      {
        title: "Todos",
        url: "/"
      },
      {
        title: "Settings",
        url: "settings"
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

