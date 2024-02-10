import React, { Component } from "react";
import Intro from "./Intro";
import About from "./About";
import "../assets/stylesheets/home.scss";

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home">
        <Intro />
        <About />
      </div>
    );
  }
}
