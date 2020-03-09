import React from "react";
import "./App.css";
import Homepage from "./Pages/homepage/homepage.component";
//import hatsPage from "./Pages/HatsPage/hatsPage.component";
import ShopPage from "./Pages/shop/shop.component";
import Header from "./Components/header/header.component";

import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Header />
      <switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop" component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
