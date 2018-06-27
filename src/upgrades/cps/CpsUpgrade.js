import React, { Component } from "react";
import { storage } from "react-easy-params";
import { view } from "react-easy-state";
import "./CpsUpgrade.css";

storage.cpsMultiplier = storage.cpsMultiplier || 1;
storage.purchasedUpgrades = storage.purchasedUpgrades || [];

class CpsUpgrade extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { name, cost, cpsModifier } = this.props;

    if (storage.count >= cost) {
      storage.purchasedUpgrades.push(name);
      storage.count -= cost;
      storage.cpsMultiplier += cpsModifier;
    }
  }

  render() {
    const { name, cost, cpsModifier } = this.props;

    // do not display upgrade if it's already purchased or if it costs more than 2x our cake count
    if (
      storage.purchasedUpgrades.includes(name) ||
      storage.totalCount < 0.5 * cost
    )
      return null;

    return (
      <div className="CpsUpgrade">
        <button onClick={this.onClick} className="CpsUpgrade-button">
          <h2>Buy {name}</h2>
        </button>
        <div className="CpsUpgrade-info">
          <div>Cost: {cost}</div>
          <div>CPS modifier: +{cpsModifier * 100}%</div>
        </div>
      </div>
    );
  }
}

export default view(CpsUpgrade);
