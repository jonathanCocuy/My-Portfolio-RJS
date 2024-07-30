import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Navigate,
  Outlet,
} from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import About from "./Components/Main/About/About";
import Projects from "./Components/Main/Projects/Projects";
import Experience from "./Components/Main/Experience/Experience";
import Contact from "./Components/Main/Contact/Contact";
import LogoImage from "./logo.png";
import "./App.css";

/* Barra de navegación */
function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const SideBar = () => {
    const nav = document.querySelector(".div-nav");
    nav.classList.toggle("open");
    setIsNavOpen(!isNavOpen);
  };

  const CloseAutoSB = () => {
    const nav = document.querySelector(".div-nav");
    nav.classList.remove("open");
    setIsNavOpen(false);
  };

  return (
    <div>
      <Router>
        <button className="toggle-button" onClick={SideBar}>
          &#9776;
        </button>
        <div className="div-nav">
          <img className="img" src={LogoImage} alt="Logo Jonathan Cocuy" />
          <ul className="navegation">
            <li className="list-nav">
              <NavLink to="/" className="items-nav" onClick={CloseAutoSB}>
                Home
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/about" className="items-nav" onClick={CloseAutoSB}>
                Acerca de mí
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/proyectos" className="items-nav" onClick={CloseAutoSB}>
                Proyectos
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/experience" className="items-nav" onClick={CloseAutoSB}>
                Experiencia
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/contacto" id="contact-item" onClick={CloseAutoSB}>
                Contacto
              </NavLink>
              <Outlet />
            </li>
          </ul>
          <button className="close-button" onClick={SideBar}>
            &times;
          </button>
        </div>

        <Routes className="elements-routes">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Redireccionar rutas no especificadas */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;