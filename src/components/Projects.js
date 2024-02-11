import React, { Component } from "react";
import Projectshead from "./Projectshead";
import Proj from "./Proj";
import "../assets/stylesheets/projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Projectshead />
        <div className="projects-content">
          <Proj
            title="kadan.live 💻"
            desc="My personal website, built with React. You're looking at it right now!"
            time="February 2024"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#3252a8"
            c2="#8132a8"
            c3="#de2349"
            n="https://media.discordapp.net/attachments/1035798463377588254/1206020619775512636/noise.jpg?ex=65da7d3a&is=65c8083a&hm=b567e4c6589af56c4d25f3d9e046ede0f0d877082750148cd4a628a1e76198ec&=&format=webp"
            to="https://github.com/Skarless/scarlettweb"
          />
          <Proj
            title="IllinoisTechRobotics.org 🤖"
            desc="ITR's website, built and designed by me with help from club members!"
            time="August 2023"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#4f4f4f"
            c2="#de2723"
            c3="#e86417"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206052316411859065/noisemap.stringy.jpg?ex=65da9abf&is=65c825bf&hm=65474a93bddab1f67f4b1b6769be25b8b83fd0d52caa1e50c44861abab7cc06e&"
            to="https://git.myitr.org/scarlett/ITR-Website"
          />
          <Proj
            title="IllinoisTechRobotics.org 🤖"
            desc="ITR's website, built and designed by me with help from club members!"
            time="August 2023"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#4f4f4f"
            c2="#de2723"
            c3="#e86417"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206052316411859065/noisemap.stringy.jpg?ex=65da9abf&is=65c825bf&hm=65474a93bddab1f67f4b1b6769be25b8b83fd0d52caa1e50c44861abab7cc06e&"
            to="https://git.myitr.org/scarlett/ITR-Website"
          />
          <Proj
            title="IllinoisTechRobotics.org 🤖"
            desc="ITR's website, built and designed by me with help from club members!"
            time="August 2023"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#4f4f4f"
            c2="#de2723"
            c3="#e86417"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206052316411859065/noisemap.stringy.jpg?ex=65da9abf&is=65c825bf&hm=65474a93bddab1f67f4b1b6769be25b8b83fd0d52caa1e50c44861abab7cc06e&"
            to="https://git.myitr.org/scarlett/ITR-Website"
          />
        </div>
      </div>
    );
  }
}
