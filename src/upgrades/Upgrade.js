import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import "./Upgrade.css";

storage.upgrades = storage.upgrades || {};

class Upgrade extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { name, cps, baseCost } = this.props;
    const upgrade = storage.upgrades[name] || {
      cost: baseCost,
      cps: cps,
      count: 0
    };

    if (storage.count >= upgrade.cost) {
      storage.count -= upgrade.cost;
      upgrade.count++;
      upgrade.cost = Math.floor(baseCost * Math.pow(1.15, upgrade.count));
    }
    storage.upgrades[name] = upgrade;
  }

  render() {
    const { name, cps, baseCost } = this.props;
    const upgrade = storage.upgrades[name] || {
      cost: baseCost,
      cps: cps,
      count: 0
    };

    return (
      <div className="Upgrade">
        <button onClick={this.onClick} className="Upgrade-button">
          <h2>Buy a {name}</h2>
        </button>
        <div className="Upgrade-stats">
          <div>Cost: {upgrade.cost}</div>
          <div>CPS: {cps}</div>
          <div>Total: {upgrade.count}</div>
          <div>Total CPS: {upgrade.count * cps}</div>
        </div>
      </div>
    );
  }
}

export default view(Upgrade);
