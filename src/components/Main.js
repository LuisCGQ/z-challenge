import React from "react";
import Clientes from "./Clientes";
import Nosotros from "./Nosotros";
import "./Main.css";

const Main = () => {
  return (
    <div className="Main-flex container">
      <Nosotros />
      <Clientes />
    </div>
  );
};

export default Main;
