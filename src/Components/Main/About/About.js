import React from "react";
import AboutImage from "./About-image.jpg";
import "./StyleAbout.css";

function About() {
  return (
    <div className="container-principal">
      <div className="container-about">
        <img className="image-about" src={AboutImage} alt="Jonathan Cocuy" />
        <div className="container-text">
          <h3 className="title-about">Acerca de mí</h3>
          <p className="paragraph-about">
            ¡Hola! Soy Jonathan Cocuy, tengo 21 años y soy un apasionado
            desarrollador frontend con experiencia en GitHub, Angular,
            JavaScript, TypeScript, HTML, CSS (incluyendo SASS), SQL Server,
            WordPress y AWS (S3). Actualmente, me estoy enfocando en mejorar mis
            habilidades en React JS. Con un título técnico en Programación de
            Software del SENA, estoy listo para enfrentar desafíos y seguir
            creciendo en la industria de la tecnología. ¡Gracias por visitar mi
            perfil! Estoy disponible para colaboraciones y consultas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
