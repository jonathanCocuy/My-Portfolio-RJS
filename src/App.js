import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import About from "./Components/Navbar/About/About";
import Projects from "./Components/Navbar/Projects/Projects";
import "./App.css";

/* Barra de navegación */
function App() {
  return (
    <Router>
      <div>
        <ul className="navegation">
          <li className="list-nav">
            <Link to="/about" className="items-nav">Acerca de mí</Link>
          </li>
          <li className="list-nav">
            <Link to="/proyectos" className="items-nav">Proyectos</Link>
          </li>
          <li className="list-nav">
            <Link to="/contacto" className="items-nav">Contacto</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<h1>Contacto</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
