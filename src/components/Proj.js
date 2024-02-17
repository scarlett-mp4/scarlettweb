import React, { Component } from "react";
import styled from 'styled-components';
import "../assets/stylesheets/proj.scss";

const ProjLink = styled.a`
  &::after {
    background-image: url("${props => props.n}");
  }
  background-image: linear-gradient(270deg, ${props => props.c1}, ${props => props.c2}, ${props => props.c3});
  animation: fadein .5s ${props => props.fadeDelay}, gradient-flow 15s ease infinite ${props => props.fadeDelay};
`;

export default class Proj extends Component {
  render() {
    return (
      <ProjLink
        href={this.props.to}
        target="_blank"
        rel="noreferrer"
        className="proj"
        c1={this.props.c1}
        c2={this.props.c2}
        c3={this.props.c3}
        n={this.props.n}
        fadeDelay={this.props.fadeDelay}
      >
        <div className="proj-header">
          <div className="proj-language">
            <img className="proj-language-icon" src={this.props.icon} alt="" />
            <span className="proj-language-text">{this.props.language}</span>
          </div>
          <span className="proj-time">{this.props.time}</span>
        </div>
        <div className="proj-title">{this.props.title}</div>
        <div className="proj-desc">{this.props.desc}</div>
      </ProjLink>
    );
  }
}
