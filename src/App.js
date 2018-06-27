import React, { Component } from "react";
import Counter from "./counter/Counter";
import Cake from "./cake/Cake";
import BuildingList from "./buildings/BuildingList";
import UpgradeList from "./upgrades/UpgradeList";
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
          <BuildingList />
          <UpgradeList />
        </div>
        <div className="App-footer">V11. Code by Ryan. Art by RJ.</div>
      </div>
    );
  }
}

export default App;
