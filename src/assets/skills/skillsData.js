import js from "./javascript.svg";
import css from "./css3.svg";
import git from "./git-icon.svg";
import html from "./html5.svg";
import linux from "./linux-tux.svg";
import node from "./nodejs.svg";
import npm from "./npm.svg";
import react from "./react.svg";
import sass from "./sass.svg";
import vsCode from "./vs-code.svg";
import mongodb from "./mongodb.svg";
import express from "./express.svg";

const skills = {
  Languages: [
    { name: "JavaScript", img: js },
    { name: "HTML", img: html },
    { name: "CSS", img: css },
  ],
  Technologies: [
    { name: "ReactJS", img: react },
    { name: "nodeJS", img: node },
    { name: "Mongodb", img: mongodb },
    { name: "Express", img: express },
    { name: "Sass", img: sass },
  ],
  "Other Tools": [
    { name: "Linux CLI", img: linux },
    { name: "Git", img: git },
    { name: "VS Code", img: vsCode },
    { name: "npm", img: npm },
  ],
};

export default skills;
