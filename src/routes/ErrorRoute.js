import React from "react";
import NavBar from "../components/NavBar";
import Error from "../components/Error";
import { useRouteError } from "react-router-dom";
import "../assets/stylesheets/app.scss";

export default function ErrorRoute() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="page">
      <div className="container">
        <NavBar currentPage="error" />
        <Error err={{ item: error }} />
      </div>
    </div>
  );
}
