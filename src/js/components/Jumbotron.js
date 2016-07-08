import React from "react";


export default class Jumbotron extends React.Component {
  render() {
    return (
      <div class="jumbotron">
        <div class="container">
          <h1>{ this.props.title }</h1>
          <p>{ this.props.content }</p>
        </div>
      </div>
    );
  }
}

