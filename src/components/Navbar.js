import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container Navbar-flex">
        <div className="Navbar-menu">
          <Link to="/" className="Navbar-link">
            <div className="Navbar-logo">{""}</div>
            Skimo
          </Link>
          <Link to="/Construccion">Menú</Link>
        </div>
        <Link to="/Construccion">Contacto</Link>
      </div>
    </div>
  );
};

export default Navbar;
