import React, { useState, useEffect } from "react";
import Cliente from "./Cliente";
import "./Clientes.css";

const Clientes = () => {
  const [frecuentes, consultarFrecuentes] = useState([]);

  const consultarApi = async () => {
    const api = await fetch(
      "https://api.jsonbin.io/b/605295617ea6546cf3e18655"
    );
    const frecuentes = await api.json();
    consultarFrecuentes(frecuentes);
  };

  //eslint-disable-next-line
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <div className="Clientes container">
      <h2>Clientes frecuentes</h2>
      <div className="Clientes-flex">
        {frecuentes.map((cliente) => (
          <Cliente
            key={cliente.id}
            nombre={cliente.name}
            imagen={cliente.image_url}
            id={cliente.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Clientes;
