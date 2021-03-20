import React from "react";
import Navbar from "./components/Navbar";
import Clientes from "./components/Clientes";
import Nosotros from "./components/Nosotros";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="App-flex container">
        <Nosotros />
        <Clientes />
      </div>
    </div>
  );
}

export default App;
