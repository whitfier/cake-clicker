import React from "react";
import CpsUpgradeList from "./cps/CpsUpgradeList";
import "./UpgradeList.css";

const UpgradeList = () => (
  <div className="UpgradeList">
    <h1>Upgrades</h1>
    <CpsUpgradeList />
  </div>
);

export default UpgradeList;
