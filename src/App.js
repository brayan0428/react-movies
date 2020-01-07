import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import { Detail } from "./pages/Detail";
import {Switch,Route} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/detail/:id" component={Detail} />
          <Route component={NotFound} />
        </Switch>
      </div>

    );
  }
}

export default App;
