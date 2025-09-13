import { Link } from "react-router-dom";
import "../css/header.css";

export default function Header() {
  return (
    <header>
      
      <nav className="navbar">
        <div style={{ display: "flex", gap: "22px" }} className="navbar-opciones">
        <Link to="/" className="navbar-opciones">Inicio</Link>
        <Link to="/experience" className="navbar-opciones">Experiencia</Link>
        {/* <Link to="/typescript" style={{ color: "white" }}>TypeScript</Link> */}
        <Link to="/reactConcepts" className="navbar-opciones">React</Link>
        <Link to="/contact" className="navbar-opciones">Contacto</Link>
        <Link to="/reactConceptsExamples" className="navbar-opciones">Conceptos</Link>
        </div>
        <div>
          <h1 className="navbar-text">Portafolio Azul Montalvo</h1>
        </div>
      </nav>
    </header>
  );
}