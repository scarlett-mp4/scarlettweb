import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import HomeSVG from "../assets/svgs/home.svg";
import ProjectsSVG from "../assets/svgs/projects.svg";
import ResumeSVG from "../assets/svgs/resume.svg";
import ContactSVG from "../assets/svgs/contact.svg";
import GithubSVG from "../assets/svgs/github.svg";
import LinkedInSVG from "../assets/svgs/linkedin.svg";
import TwitterSVG from "../assets/svgs/twitter.svg";
import "../assets/stylesheets/navbar.scss";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    switch (this.props.currentPage) {
      case "home":
        document.getElementById("underline-home").style.visibility = "visible";
        break;
      case "projects":
        document.getElementById("underline-projects").style.visibility =
          "visible";
        break;
      case "resume":
        document.getElementById("underline-resume").style.visibility =
          "visible";
        break;
      case "contact":
        document.getElementById("underline-contact").style.visibility =
          "visible";
        break;
    }
  }

  render() {
    return (
      <div className="divider-c">
        <div className="navbar">
          <div className="navbar-linksbar">
            <NavLink className="navbar-logo" to="/">
              <span className="navbar-logo-text">sk</span>
            </NavLink>
            <div className="navbar-linksbar-links">
              <NavLink className="navbar-link" to="/">
                <div className="navbar-link-content">
                  <img className="navbar-link-svg" src={HomeSVG} alt="" />
                  <span className="navbar-link-text">Home</span>
                </div>
                <div
                  id="underline-home"
                  className="navbar-link-underline"
                ></div>
              </NavLink>
              <NavLink className="navbar-link" to="/projects">
                <div className="navbar-link-content">
                  <img className="navbar-link-svg" src={ProjectsSVG} alt="" />
                  <span className="navbar-link-text">Projects</span>
                </div>
                <div
                  id="underline-projects"
                  className="navbar-link-underline"
                ></div>
              </NavLink>
              <NavLink className="navbar-link" to="/resume">
                <div className="navbar-link-content">
                  <img className="navbar-link-svg" src={ResumeSVG} alt="" />
                  <span className="navbar-link-text">Resume</span>
                </div>
                <div
                  id="underline-resume"
                  className="navbar-link-underline"
                ></div>
              </NavLink>
              <NavLink className="navbar-link" to="/contact">
                <div className="navbar-link-content">
                  <img className="navbar-link-svg" src={ContactSVG} alt="" />
                  <span className="navbar-link-text">Contact</span>
                </div>
                <div
                  id="underline-contact"
                  className="navbar-link-underline"
                ></div>
              </NavLink>
            </div>
          </div>
          <div className="navbar-socialbar">
            <a
              className="navbar-sociallink"
              href="https://twitter.com/xSkarless"
              target="_blank"
            >
              <img className="navbar-sociallink-svg" src={TwitterSVG} alt="" />
            </a>
            <a
              className="navbar-sociallink"
              href="https://github.com/Skarless"
              target="_blank"
            >
              <img className="navbar-sociallink-svg" src={GithubSVG} alt="" />
            </a>
            <a
              className="navbar-sociallink"
              href="https://www.linkedin.com/in/scarlett-kadan-705aa8294/"
              target="_blank"
            >
              <img className="navbar-sociallink-svg" src={LinkedInSVG} alt="" />
            </a>
          </div>
        </div>
        <div className="divider"></div>
      </div>
    );
  }
}
