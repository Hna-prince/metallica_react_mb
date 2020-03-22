import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Username from "./components/Username";
import ListeHobbies from "./components/ListeHobbies";
import Photos from "./components/Photos";
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
      {/*} <Link to="/">Home</Link>
        &nbsp;
        <Link to="/artist/Metallica">Groupe Rock</Link>
        <Link to="/ui">Test Material UI</Link>
        &nbsp;
        <Link to="/photos">Photos</Link>
        &nbsp;
        <Link to="/username">Username</Link>
  */}
        <Route exact path="/" component={Accueil}></Route>
        <Route path="/ui" component={TestMaterialUI}></Route>
        <Route path="/photos/:id" component={Photos}></Route>
        <Route
          path="/username"
          component={() => <Username name="Michel" age="54" />}
        />
        <Route path="/artist/:name" component={GroupeRock} />
      </BrowserRouter>
    </div>
  );
}

export default App;
