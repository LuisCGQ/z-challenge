import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Construccion from "./components/Construccion";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" render={() => <Main />} />
        <Route exact path="/construccion" render={() => <Construccion />} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
