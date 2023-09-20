import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
  Outlet,
} from "react-router-dom";
import Home from "./Components/Main/Home/Home";
import About from "./Components/Main/About/About";
import Projects from "./Components/Main/Projects/Projects";
import Experience from "./Components/Main/Experience/Experience";
import Contact from "./Components/Main/Contact/Contact";
import LogoImage from "./logo.png";
import Footer from "./Components/Footer/Footer";
import "./App.css";

/* Barra de navegación */
function App() {

  return (
    <div className="App">
      <Router>
        <div className="div-nav">
          <img className="img" src={LogoImage} alt="Logo Jonathan Cocuy"></img>
          <ul className="navegation">
            <li className="list-nav">
              <NavLink to="/" className="items-nav" end>
                Home
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/about" className="items-nav">
                Acerca de mí
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/proyectos" className="items-nav">
                Proyectos
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/experience" className="items-nav">
                Experiencia
              </NavLink>
            </li>
            <li className="list-nav">
              <NavLink to="/contacto" id="contact-item">
                Contacto
              </NavLink>
              <Outlet />
            </li>
          </ul>
        </div>

        <Routes className="elements-routes">
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyectos" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </Router>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
