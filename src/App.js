import React, { Component } from "react";
import UpgradeList from "./upgrades/UpgradeList";
import Counter from "./counter/Counter";
import Cake from "./cake/Cake";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Counter />
        </div>
        <div className="App-body">
          <Cake />
          <UpgradeList />
        </div>
        <div className="App-footer">V8. Code by Ryan. Art by RJ.</div>
      </div>
    );
  }
}

export default App;
