import React from "react";
import HTMLIcon from "../../../images/html.png";
import CSSIcon from "../../../images/css.png";
import JSIcon from "../../../images/js.png";
import TSIcon from "../../../images/typescript.png";
import SQLIcon from "../../../images/sql-server.png";
import GitHubIcon from "../../../images/github.png";
import AngularIcon from "../../../images/angular.png";
import ReactIcon from "../../../images/react.png";
import "./StyleExperience.css";

const Experience = () => {
  return (
    <main className="container-experience">
      <h1 className="title-principal">Experiencia</h1>
      <h2 className="subtitle-principal">Tecnologías que utilizo actualmente</h2>
      <div className="container-principal-experience">
        <section>
          <img src={HTMLIcon} width={100} alt="HTML"></img>
          <h3 className="title">HTML</h3>
        </section>
        <section>
          <img src={CSSIcon} width={100} alt="CSS"></img>
          <h3 className="title">CSS</h3>
        </section>
        <section>
          <img src={JSIcon} width={100} alt="JavaScript"></img>
          <h3 className="title">JavaScript</h3>
        </section>
        <section>
          <img src={TSIcon} width={100} alt="TypeScript"></img>
          <h3 className="title">TypeScript</h3>
        </section>
        <section>
          <img src={SQLIcon} width={100} alt="SQL Server"></img>
          <h3 className="title">SQL Server</h3>
        </section>
        <section>
          <img src={GitHubIcon} width={100} alt="GitHub"></img>
          <h3 className="title">GitHub</h3>
        </section>
        <section>
          <img src={AngularIcon} width={100} alt="Angular"></img>
          <h3 className="title">Angular</h3>
        </section>
        <section>
          <img src={ReactIcon} width={100} alt="React"></img>
          <h3 className="title">React JS</h3>
        </section>
      </div>
    </main>
  );
};

export default Experience;
