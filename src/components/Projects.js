import React, { Component } from "react";
import Projectshead from "./Projectshead";
import Proj from "./Proj";
import img_noise1 from "../assets/images/noise1.jpg";
import img_noise2 from "../assets/images/noise2.jpg";
import img_noise3 from "../assets/images/noise3.jpg";
import img_noise4 from "../assets/images/noise4.png";
import img_react from "../assets/images/react.png";
import img_java from "../assets/images/java.webp";
import img_asm from "../assets/images/asm.png";
import "../assets/stylesheets/projects.scss";

export default class Projects extends Component {
  render() {
    return (
      <div className="projects">
        <Projectshead />
        <Proj
          title="kadan.live 💻"
          desc="My personal website, built with React. You're looking at it right now!"
          time="February 2024"
          language="React"
          icon={img_react}
          c1="#3252a8"
          c2="#8132a8"
          c3="#de2349"
          n={img_noise1}
          to="https://github.com/Skarless/scarlettweb"
          fadeDelay="0.1s"
        />
        <Proj
          title="Belden Jukebox 🎵"
          desc="With Illinois Tech Robotics, we're building a jukebox styled machine to display Belden products on the show floor. I'm building the frontend UI with React!"
          time="January 2024"
          language="React"
          icon={img_react}
          c1="#004990"
          c2="#002554"
          c3="#007cbe"
          n={img_noise2}
          to="https://git.myitr.org/Jukebox/jukebox-web"
          fadeDelay="0.15s"
        />
        <Proj
          title="MIPS Encoder & Decoder 🔑"
          desc="A MIPS hamming encoder and decoder built entirely in MIPS assembly. This was built for CS 350 at Illinois Tech."
          time="November 2023"
          language="MIPS Assembly"
          icon={img_asm}
          c1="#ff00cc"
          c2="#ff8cb6"
          c3="#800fbd"
          n={img_noise3}
          to="https://github.com/Skarless/mips-error-detection"
          fadeDelay="0.2s"
        />
        <Proj
          title="IllinoisTechRobotics.org 🤖"
          desc="ITR's website, built and designed by me with help from other club members too!"
          time="August 2023"
          language="React"
          icon={img_react}
          c1="#4f4f4f"
          c2="#de2723"
          c3="#e86417"
          n={img_noise4}
          to="https://git.myitr.org/scarlett/ITR-Website"
          fadeDelay="0.25s"
        />
        <Proj
          title="Inventory Manager 🧦"
          desc="A JavaFX inventory manager solution for a hypothetical store. This was built for CS 201 at Illinois Tech."
          time="November 2022"
          language="Java"
          icon={img_java}
          c1="#4a4a4a"
          c2="#690909"
          c3="#bd5c17"
          n={img_noise1}
          to="https://github.com/Skarless/inventory-manager"
          fadeDelay="0.3s"
        />
        <Proj
          title="Manhunt: Minecraft Plugin 🎮"
          desc="A Minecraft plugin that adds a manhunt gamemode to the game. This was built for fun with friends and is open source!"
          time="May 2021"
          language="Java"
          icon={img_java}
          c1="#2aed11"
          c2="#55b578"
          c3="#d0ed11"
          n={img_noise2}
          to="https://www.spigotmc.org/resources/manhunt-hunter-vs-speedrunner.91938/"
          fadeDelay="0.35s"
        />
      </div>
    );
  }
}
