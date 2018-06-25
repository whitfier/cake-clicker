import React, { Component } from "react";
import "./App.css";
import Cake from "./cake/Cake";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cake />
        <div className="App-footer">V5. Code by Ryan. Art by RJ.</div>
      </div>
    );
  }
}

export default App;
