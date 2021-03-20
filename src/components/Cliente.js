import React from "react";
import "./Cliente.css";

const Cliente = ({ nombre, id, imagen }) => {
  return (
    <div className="Cliente">
      <p className="id">{id}</p>
      <div className="Cliente-flex">
        <img src={imagen} alt="foto" />
        <p className="nombre">{nombre}</p>
      </div>
      <p className="email">{nombre.split(" ")[0].toLowerCase()}@example.com</p>
    </div>
  );
};

export default Cliente;
