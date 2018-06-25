import React, { Component } from "react";
import "./App.css";
import Cake from "./cake/Cake";
import Fork from "./upgrades/Fork";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Fork />
        <Cake />
        <div className="App-footer">V6. Code by Ryan. Art by RJ.</div>
      </div>
    );
  }
}

export default App;
