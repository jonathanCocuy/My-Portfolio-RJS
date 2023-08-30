import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import About from "./Components/Main/About/About";
import Projects from "./Components/Main/Projects/Projects";
import Experience from "./Components/Main/Experience/Experience";
import Contact from "./Components/Main/Contact/Contact";
import "./Images/Logo-JC.png"
import "./App.css";

/* Barra de navegación */
function App() {
  return (
    <Router>
      <div className="div-nav">
      <Link hrefLang="./Images/Logo-JC.png"></Link>
        <ul className="navegation">
          <li className="list-nav">
            <Link to="/home" className="items-nav">
              Home
            </Link>
          </li>
          <li className="list-nav">
            <Link to="/about" className="items-nav">
              Acerca de mí
            </Link>
          </li>
          <li className="list-nav">
            <Link to="/proyectos" className="items-nav">
              Proyectos
            </Link>
          </li>
          <li className="list-nav">
            <Link to="/experience" className="items-nav">
              Experiencia
            </Link>
          </li>
          <li className="list-nav">
            <Link to="/contacto" className="items-nav">
              Contacto
            </Link>
          </li>
        </ul>
      </div>

      <Routes className="elements-routes">
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Router>

  );
}

export default App;
