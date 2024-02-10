import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Error from "../components/Error";
import "../assets/stylesheets/app.scss";

export default class ErrorRoute extends Component {
  constructor(props) {
    super(props);
    document.title = "Scarlett Kadan | Error";
  }

  render() {
    return (
      <div className="page">
        <div className="container">
          <NavBar currentPage="error" />
          <Error />
        </div>
      </div>
    );
  }
}
