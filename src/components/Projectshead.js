import React, { Component } from "react";
import "../assets/stylesheets/projectshead.scss";

export default class Projectshead extends Component {
  render() {
    return (
      <div className="projects-header">
        <span className="projects-title">🎨&nbsp;&nbsp;Projects</span>
        <span className="projects-subtitle">
          Here are some of the projects I've worked on or am currently working
          on.
        </span>
        <div className="projects-divider"></div>
      </div>
    );
  }
}
