import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Link } from "react-router-dom";
import TestMaterialUI from "./components/TestMaterialUI";
import GroupeRock from "./components/GroupeRock";
import Toolbar from "./components/Toolbar";
import Accueil from "./components/Accueil";

function App() {
  let nom = "Hello Madagascar";

  return (
    <div className="App">
    <Toolbar/>
      <BrowserRouter>
        <Route exact path="/" component={Accueil}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
       
        <Route path="/artist/:name" component={GroupeRock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
