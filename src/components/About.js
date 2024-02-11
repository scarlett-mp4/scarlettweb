import React, { Component } from "react";
import { motion } from "framer-motion";
import "../assets/stylesheets/about.scss";

export default class About extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="about"
      >
        <div className="about-divider"></div>
        <div className="about-content">
          <span className="about-emoji">✏️</span>
          <div className="about-text">
            <span className="about-title">About</span>
            <div className="about-description">
              <span className="about-p">Hello, my name is </span>
              <span className="about-p-bold">Scarlett</span>
              <span className="about-p">
                . I'm a nineteen-year-old developer from{" "}
              </span>
              <span className="about-p-bold">New York State</span>
              <span className="about-p">
                , deeply passionate about technology. I'm currently in my second
                year of college, working towards earning a Bachelor's Degree in{" "}
              </span>
              <span className="about-p-bold">Computer Science</span>
              <span className="about-p">
                . From a young age, I've been fascinated by computers and their
                impact on our daily lives, which is what led me to start my
                journey in tech.
              </span>
              <br />
              <br />
              <span className="about-p-bold">
                I have used and feel comfortable with the following
                technologies:
              </span>
              <div className="about-p-list">
                <span className="about-p-list-item">• Javascript</span>
                <span className="about-p-list-item">• HTML + CSS</span>
                <span className="about-p-list-item">• React</span>
                <span className="about-p-list-item">• Java</span>
                <span className="about-p-list-item">• Python</span>
                <span className="about-p-list-item">• C#</span>
                <span className="about-p-list-item">• MySQL</span>
              </div>
            </div>
          </div>
        </div>
        <div className="about-divider"></div>
      </motion.div>
    );
  }
}
