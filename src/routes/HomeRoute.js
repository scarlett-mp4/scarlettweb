import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Home from "../components/Home";
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
          <NavBar currentPage="home" />
          <Home />
        </div>
      </div>
    );
  }
}
