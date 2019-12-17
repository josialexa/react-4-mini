import React, { Component } from "react";
import {HashRouter as Router} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import routes from './routes'
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {routes}
        </div>
      </Router>
    );
  }
}

export default App;
