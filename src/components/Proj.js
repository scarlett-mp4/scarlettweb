import React, { Component } from "react";
import "../assets/stylesheets/proj.scss";

export default class Proj extends Component {
  constructor(props) {
    super(props);
    this.style = document.createElement("style");
    this.style.innerHTML = `
    .proj {
      background-image: linear-gradient(270deg, ${this.props.c1}, ${this.props.c2}, ${this.props.c3});
    }
    
    .proj::after {
      background-image: url("${this.props.n}");
    }
  `;
  }

  componentDidMount() {
    document.head.appendChild(this.style);
  }

  render() {
    return (
      <a href={this.props.to} target="_blank" rel="noreferrer" className="proj">
        <div className="proj-header">
          <div className="proj-language">
            <img className="proj-language-icon" src={this.props.icon} alt="" />
            <span className="proj-language-text">{this.props.language}</span>
          </div>
          <span className="proj-time">{this.props.time}</span>
        </div>
        <div className="proj-title">{this.props.title}</div>
        <div className="proj-desc">{this.props.desc}</div>
      </a>
    );
  }
}
