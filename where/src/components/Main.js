import React, { Component } from "react";

class Main extends Component {
  render() {
    return (
      <div id="content">
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

export default Main;
