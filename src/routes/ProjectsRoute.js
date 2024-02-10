import React, { Component } from "react";
import NavBar from "../components/NavBar";
import "../assets/stylesheets/app.scss";

export default class ProjectsRoute extends Component {
  constructor(props) {
    super(props);
    document.title = "Scarlett Kadan | Projects";
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <NavBar currentPage="projects" />
        </div>
      </div>
    );
  }
}
