import React, { Component } from "react";
import { motion } from "framer-motion";
import Proj from "./Proj";
import "../assets/stylesheets/projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <motion.div
            initial={{ opacity: 0, rotateX: 90 }}
            animate={{ opacity: 1, rotateX: 0 }}
            transition={{ duration: 0.5, delay: 0 }} className="projects-header">
          <span className="projects-title">🎨&nbsp;&nbsp;Projects</span>
          <span className="projects-subtitle">
            Here are some of the projects I've worked on or am currently working
            on.
          </span>
          <div className="projects-divider"></div>
        </motion.div>
        <div className="projects-content">
          <Proj
            title="kadan.live 💻"
            desc="My personal website, build with React."
            time="February 2024"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#6135ff"
            c2="#d400f0"
            c3="#00b8f0"
            n="https://media.discordapp.net/attachments/1035798463377588254/1206020619775512636/noise.jpg?ex=65da7d3a&is=65c8083a&hm=b567e4c6589af56c4d25f3d9e046ede0f0d877082750148cd4a628a1e76198ec&=&format=webp"
            to="https://github.com/Skarless/scarlettweb"
          />
        </div>
      </div>
    );
  }
}
