import React, { Component } from "react";
import { motion } from "framer-motion";
import "../assets/stylesheets/projectshead.scss";

export default class Projectshead extends Component {
  render() {
    return (
      <motion.div
        initial={{ opacity: 0, rotateX: 90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 0.5, delay: 0 }}
        className="projects-header"
      >
        <span className="projects-title">🎨&nbsp;&nbsp;Projects</span>
        <span className="projects-subtitle">
          Here are some of the projects I've worked on or am currently working
          on.
        </span>
        <div className="projects-divider"></div>
      </motion.div>
    );
  }
}
