import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import "./Counter.css";

storage.count = storage.count || 0;
storage.totalCount = storage.totalCount || 0;
storage.cakePerSecond = storage.cakePerSecond || 0;
storage.upgrades = storage.upgrades || {};

class Counter extends Component {
  updateCakeCounts() {
    const cps = Object.values(storage.upgrades)
      .map(upgrade => upgrade.cps * upgrade.count)
      .reduce((a, b) => a + b, 0);
    storage.cakePerSecond = cps;
    storage.count += storage.cakePerSecond;
    storage.totalCount += storage.cakePerSecond;
  }

  componentDidMount() {
    setInterval(this.updateCakeCounts, 1000);
  }

  render() {
    return (
      <div className="Counter">
        <div>Cakes baked: {storage.count}</div>
        <div>Cakes baked (all time): {storage.totalCount}</div>
        <div>Cakes per second (CPS): {storage.cakePerSecond}</div>
      </div>
    );
  }
}

export default view(Counter);
