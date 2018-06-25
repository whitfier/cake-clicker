import React, { Component } from "react";
import "./App.css";
import Cake from "./cake/Cake";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cake />
        <div className="App-footer">WIP. Code by Ryan. Art by RJ.</div>
      </div>
    );
  }
}

export default App;
