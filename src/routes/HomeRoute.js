import React, { Component } from "react";

import "../assets/stylesheets/app.scss";

export default class HomeRoute extends Component {
  constructor(props) {
    super(props);
    document.title = "Scarlett Kadan | Home";
  }

  render() {
    return (
      <div className="page">
        <div className="container">
            Initial Commit 💘
        </div>
      </div>
    );
  }
}
