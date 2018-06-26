import React, { Component } from "react";
import { storage } from "react-easy-params";
import Upgrade from "./Upgrade";
import "./UpgradeList.css";

const upgrades = [
  { name: "Fork", baseCost: 10, cps: 1 },
  { name: "Frosting", baseCost: 20, cps: 2 },
  { name: "Sprinkles", baseCost: 40, cps: 4 }
];

class UpgradeList extends Component {
  componentDidMount() {
    // remove any unconfigured upgrades from localstorage
    storage.upgrades = storage.upgrades || {};
    const currentUpgradeNames = upgrades.map(upgrade => upgrade.name);
    Object.keys(storage.upgrades).forEach(key => {
      if (!currentUpgradeNames.includes(key)) delete storage.upgrades[key];
    });
  }

  render() {
    const upgradeComponents = upgrades.map(upgrade => (
      <Upgrade
        key={upgrade.name}
        name={upgrade.name}
        baseCost={upgrade.baseCost}
        cps={upgrade.cps}
      />
    ));
    return <div className="UpgradeList">{upgradeComponents}</div>;
  }
}

export default UpgradeList;
