import React, { Component } from "react";
import NavBar from "../components/NavBar";
import "../assets/stylesheets/app.scss";
import "@google/model-viewer";
import MODEL from "../assets/glb/print.glb";

export default class TempRoute extends Component {
    constructor(props) {
        super(props);
        document.title = "Scarlett Kadan | IDS";
    }

    headstyle = {
        backgroundColor: "transparent",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        bottom: "50px",
        left: "0",
        zIndex: "1",
    };

    style2 = {
        backgroundColor: "rgba(255, 255, 255, 0.04)",
        width: "auto",
        height: "auto",
        padding: "20px",
        borderRadius: "20px",
    };

    textstyle = {
        color: "white",
        fontSize: "32px",
        fontWeight: "400",
        textAlign: "center",
        margin: "0",
        fontFamily: "roboto, sans-serif",
        width: "auto",
        height: "auto",
    };

    textStyle2 = {
        color: "rgb(198, 198, 198)",
        fontSize: "18px",
        fontWeight: "400",
        textAlign: "center",
        margin: "0",
        fontFamily: "roboto, sans-serif",
        width: "auto",
        height: "auto",
        marginTop: "10px",
    };

    render() {
        return (
            <div className="page">
                <div className="container">
                    <NavBar currentPage="projects" />
                    <div className="page-header" style={this.headstyle}>
                        <div style={this.style2}>
                            <h1 style={this.textstyle}>IDS 105: Journal #3</h1>
                            <p style={this.textStyle2}>
                                LIDAR scan of animal print found in Putnam
                                County, NY.
                            </p>
                        </div>
                    </div>
                    <model-viewer
                        src={MODEL}
                        alt="3D Model for IDS"
                        auto-rotate
                        camera-controls
                        ar
                        camera-orbit="0deg 60deg auto"
                        style={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden",
                        }}
                    ></model-viewer>
                </div>
            </div>
        );
    }
}
