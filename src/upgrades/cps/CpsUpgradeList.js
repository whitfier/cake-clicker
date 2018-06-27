import React from "react";
import CpsUpgrade from "./CpsUpgrade";

const cpsUpgrades = [
  { name: "Lemon Cake", cost: 1000, cpsModifier: 0.1 },
  { name: "Strawberry Cake", cost: 10000, cpsModifier: 0.15 },
  { name: "Chocolate Cake", cost: 100000, cpsModifier: 0.2 },
  { name: "Big Cake", cost: 1000000, cpsModifier: 0.25 },
  { name: "Huge Cake", cost: 10000000, cpsModifier: 0.3 },
  { name: "Enormous Cake", cost: 100000000, cpsModifier: 0.35 },
  { name: "Monstrous Cake", cost: 1000000000, cpsModifier: 0.4 }
];

const CpsUpgradeList = () => (
  <div className="CpsUpgradeList">
    {cpsUpgrades.map(upgrade => (
      <CpsUpgrade
        key={upgrade.name}
        name={upgrade.name}
        cost={upgrade.cost}
        cpsModifier={upgrade.cpsModifier}
      />
    ))}
  </div>
);

export default CpsUpgradeList;
