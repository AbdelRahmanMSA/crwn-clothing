import "./App.css";
import React from "react";
import {Route} from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";

const HatsPage = () => {
  return <div>
    <h1>Hates Page</h1>
  </div>
}

const App = () => {
  return (
    <div>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop/hats' component={HatsPage} />
    </div>
  );
};

export default App;
