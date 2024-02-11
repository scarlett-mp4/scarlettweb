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
            title="Belden Jukebox 🎵"
            desc="With Illinois Tech Robotics, we're building a jukebox styled machine to display Belden products on the show floor. I'm building the frontend UI with React!"
            time="January 2024"
            language="React"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206028329225035796/React-icon.svg.png?ex=65da8468&is=65c80f68&hm=cdb4832745210ad01c5e90a58e5886412c890698b95a98bf15b0e1cc6be0830c&=&format=webp&quality=lossless&width=810&height=704"
            c1="#004990"
            c2="#002554"
            c3="#007cbe"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206267614188412949/ac-texture-noise-noise-amplitude-C-1-12.jpg?ex=65db6342&is=65c8ee42&hm=768b653ed3ce540824a058660817f9f750b1d6e5de8b9aee8fb43d056dfc367f&"
            to="https://git.myitr.org/Jukebox/jukebox-web"
          />
          <Proj
            title="MIPS Encoder & Decoder 🔑"
            desc="A MIPS hamming encoder and decoder built entirely in MIPS assembly. This was built for CS 350 at Illinois Tech."
            time="November 2023"
            language="MIPS Assembly"
            icon="https://cdn.discordapp.com/attachments/1035798463377588254/1206269570621382676/assembly-icon-2048x2048-wspx42mf.png?ex=65db6515&is=65c8f015&hm=968adc985aa1cba4540710dd7b550f762b520baedfacdc19e4a64490bd320512&"
            c1="#ff00cc"
            c2="#ff8cb6"
            c3="#800fbd"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206270487337111572/fastnoise-perlin.png?ex=65db65ef&is=65c8f0ef&hm=0ddb066e85191ac3223ecaccf516433e5673414e52a246e29c2e2b25817d91b2&"
            to="https://git.myitr.org/scarlett/ITR-Website"
          />
          <Proj
            title="IllinoisTechRobotics.org 🤖"
            desc="ITR's website, built and designed by me with help from other club members too!"
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
            title="Inventory Manager 🧦"
            desc="A JavaFX inventory manager solution for a hypothetical store. This was built for CS 201 at Illinois Tech."
            time="November 2022"
            language="Java"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206273402734907392/181_Java_logo_logos-512.webp?ex=65db68a6&is=65c8f3a6&hm=50e40b67c9ac54656b63573e82c09574c87585b9c6ee6b77f8d6ed574292c2eb&=&format=webp"
            c1="#4a4a4a"
            c2="#690909"
            c3="#bd5c17"
            n="https://cdn.discordapp.com/attachments/1035798463377588254/1206267614188412949/ac-texture-noise-noise-amplitude-C-1-12.jpg?ex=65db6342&is=65c8ee42&hm=768b653ed3ce540824a058660817f9f750b1d6e5de8b9aee8fb43d056dfc367f&"
            to="https://github.com/Skarless/inventory-manager"
          />
          <Proj
            title="Manhunt: Minecraft Plugin 🎮"
            desc="A Minecraft plugin that adds a manhunt gamemode to the game. This was built for fun with friends and is open source!"
            time="May 2021"
            language="Java"
            icon="https://media.discordapp.net/attachments/1035798463377588254/1206273402734907392/181_Java_logo_logos-512.webp?ex=65db68a6&is=65c8f3a6&hm=50e40b67c9ac54656b63573e82c09574c87585b9c6ee6b77f8d6ed574292c2eb&=&format=webp"
            c1="#2aed11"
            c2="#55b578"
            c3="#d0ed11"
            n="https://media.discordapp.net/attachments/1035798463377588254/1206020619775512636/noise.jpg?ex=65da7d3a&is=65c8083a&hm=b567e4c6589af56c4d25f3d9e046ede0f0d877082750148cd4a628a1e76198ec&=&format=webp"
            to="https://www.spigotmc.org/resources/manhunt-hunter-vs-speedrunner.91938/"
          />
        </div>
      </div>
    );
  }
}
