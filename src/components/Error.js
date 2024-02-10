import React, { Component } from "react";
import "../assets/stylesheets/error.scss";

export default class Error extends Component {
  status = this.props.err.item.status;
  text = this.props.err.item.statusText;
  message = this.props.err.item.error.message;

  render() {
    return (
      <div className="error">
        <div className="c">
          <h1>
            {this.status}: {this.text}
          </h1>
          <h2>{this.message}</h2>
        </div>
      </div>
    );
  }
}
