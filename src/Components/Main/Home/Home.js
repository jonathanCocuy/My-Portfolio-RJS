import React from "react";
import "./StyleHome.css";
import LogoImage from "../../../logo.png";

const Home = () => {
  return (
    <div className="div-home">
      <img className="img-home" src={LogoImage} alt="Logo Jonathan Cocuy"></img>
      <h1 className="title-developer">
        DESARROLLADOR DE <br />
        <span>SOFTWARE</span>&nbsp;<span className="span-frontend">FRONT-END</span>
      </h1>
    </div>
  );
}

export default Home;
