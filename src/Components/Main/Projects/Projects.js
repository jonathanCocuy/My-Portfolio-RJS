import React from "react";
import "./StyleProjects.css";
import PesoPlaneta from "../../../images/peso-planetas.png";
import Minicalculator from "../../../images/minicalculator.png";
import Counter from "../../../images/contador.png";

let linkProject1 = "https://jonathancocuy.github.io/Weight-Planets-JS/";
let linkProject2 = "https://jonathancocuy.github.io/Counter-Practice-Angular/";
let linkProject3 = "https://jonathancocuy.github.io/MiniCalculator-Angular/";

const Projects = () => {
  return (
    <main className="main-projects">
      <div className="title-projects">
        <h1>Proyectos</h1>
      </div>
      <div>
        <h2 className="subtitle-projects">
          Aquí tengo unos pequeños proyectos con los cuales inicie
        </h2>
      </div>
      <div className="projects">
        {/* Proyecto 1 */}
        <section className="section-projects">
          <div className="div-projects">
            <h3 className="title-project-section">Proyecto 1</h3>
            <h4 className="subtitle-project-section">Peso en otros planetas</h4>
            <p className="paragraph-projects-section">
              Con este proyecto lo hice para prácticar y poner a prueba de forma
              básica mis conocimientos en HTML, CSS y JavaScript. Este pequeño
              proyecto, lo realice con una idea que encontré en internet sobre
              que nuestro peso varia en los diferentes planetas, entonces lo
              desarrolle para que independientemente del peso que pongamos, mi
              peso será diferente en cada planeta que seleccione.
            </p>
          </div>
          <div>
            <a href={linkProject1} target="_blank">
              <img
                className="img-projects"
                src={PesoPlaneta}
                width={450}
                alt="Planets"
              ></img>
            </a>
          </div>
        </section>

        {/* Proyecto 2 */}
        <section className="section-projects" id="section-project-2">
          <div>
            <a href={linkProject2} target="_blank">
              <img
                className="img-projects"
                src={Counter}
                width={450}
                alt="Calculator"
              ></img>
            </a>
          </div>
          <div className="div-projects">
            <h3 className="title-project-section">Proyecto 2</h3>
            <h4 className="subtitle-project-section">Contador</h4>
            <p className="paragraph-projects-section">
              Este proyecto fue el primero que desarrolle en Angular, poniendo
              en práctica JavaScript. Es un contador que tiene dos botones, uno
              para aumentar y el otro para disminuir, asímismo tiene uno de
              reset.
            </p>
          </div>
        </section>

        {/* Proyecto 3 */}
        <section className="section-projects">
          <div className="div-projects">
            <h3 className="title-project-section">Proyecto 3</h3>
            <h4 className="subtitle-project-section">Mini Calculadora</h4>
            <p className="paragraph-projects-section">
              Este proyecto lo hice con la idea de empezar con Angular,
              utilizando de forma básica componentes, TypeScript y poder tener
              experiencia con este framework. Este proyecto es básicamente una
              calculadora bastante sencilla que se puede mejorar.
            </p>
            <p className="paragraph-projects-section">
              Fue hecho en Angular, utilizando HTML, Angular, CSS y TypeScript
            </p>
          </div>
          <div>
            <a href={linkProject3} target="_blank">
              <img
                className="img-projects"
                src={Minicalculator}
                width={450}
                alt="Counter"
              ></img>
            </a>
          </div>
        </section>

      </div>
        {/* Proyecto 4  */}
        <section className="section-projects-portfolio">
          <div className="project-4">
            <div className="div-projects">
              <h3 className="title-project-4">Proyecto 4</h3>
              <h4 className="subtitle-project-4">Actual Portafolio</h4>
              <p className="paragraph-projects-section">
                Este proyecto o bien portafolio lo desarrolle con la idea de
                mostrar quien soy, mi experiencia, mis proyectos y para
                contactarme a la hora de que se sientan interesados por mis
                servicios.
              </p>
              <p className="paragraph-projects-section">
                Es mi primer proyecto en React, he aprendido mucho y cada día aprendo más de esta librería de JavaScript.
              </p>
            </div>
          </div>
        </section>
    </main>
  );
};

export default Projects;
