import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/about">Acerca de mí</Link>
            </li>
            <li>
              <Link to="/projects">Proyectos</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/projects">
          <Projects/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
      </Routes>
    </Router>
  );
};
export default App;