import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="container Navbar-flex">
        <div className="Navbar-menu">
          <a href="/" className="Navbar-link">
            <div className="Navbar-logo">{""}</div>
            Skimo
          </a>
          <a href="/Construccion">Menú</a>
        </div>
        <a href="/Construccion">Contacto</a>
      </div>
    </div>
  );
};

export default Navbar;
