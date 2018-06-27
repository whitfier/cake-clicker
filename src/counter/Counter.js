import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import "./Counter.css";

storage.count = storage.count || 0;
storage.totalCount = storage.totalCount || 0;
storage.cakePerSecond = storage.cakePerSecond || 0;
storage.cpsMultiplier = storage.cpsMultiplier || 1;
storage.buildings = storage.buildings || {};

const counter_tickrate = 100;

class Counter extends Component {
  fast_updateCakeCounts() {
    storage.count += (counter_tickrate / 1000) * storage.cakePerSecond;
  }

  slow_updateCakeCounts() {
    const cps = Object.values(storage.buildings)
      .map(building => building.cps * building.count)
      .reduce((a, b) => a + b, 0);
    storage.cakePerSecond = cps * storage.cpsMultiplier;
    storage.totalCount += storage.cakePerSecond;
    Object.values(storage.buildings).forEach(building => {
      building.alltime += building.cps * building.count;
    });
  }

  componentDidMount() {
    setInterval(this.fast_updateCakeCounts, counter_tickrate);
    setInterval(this.slow_updateCakeCounts, 1000);
  }

  render() {
    return (
      <div className="Counter">
        <div>Cakes baked: {storage.count.toFixed(0)}</div>
        <div>Cakes baked (all time): {storage.totalCount.toFixed(0)}</div>
        <div>Cakes per second (CPS): {storage.cakePerSecond.toFixed(0)}</div>
        <div>CPS multiplier: {storage.cpsMultiplier.toFixed(2)}</div>
      </div>
    );
  }
}

export default view(Counter);
