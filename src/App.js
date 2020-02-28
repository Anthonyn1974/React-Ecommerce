import React from "react";
import "./App.css";
import homepage from "./Pages/Homepage/homepage.component";
import hatsPage from "./Pages/HatsPage/hatsPage.component";

import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <switch>
        <Route exact path="/" component={homepage} />
        <Route exact path="/hats" component={hatsPage} />
      </switch>
    </div>
  );
}

export default App;
