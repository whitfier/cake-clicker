import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import "./Building.css";

storage.buildings = storage.buildings || {};

class Building extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const { name, cps, baseCost, alltime } = this.props;
    const building = storage.buildings[name] || {
      cost: baseCost,
      cps: cps,
      count: 0,
      alltime: 0
    };

    if (storage.count >= building.cost) {
      storage.count -= building.cost;
      building.count++;
      building.cost = Math.floor(baseCost * Math.pow(1.15, building.count));
    }
    storage.buildings[name] = building;
  }

  render() {
    const { name, cps, baseCost, image } = this.props;
    const building = storage.buildings[name] || {
      cost: baseCost,
      cps: cps,
      count: 0,
      alltime: 0
    };

    return (
      <div className="Building">
        <button onClick={this.onClick} className="Building-button">
          <div className="Building-image">
            <img src={image} />
          </div>
          <div className="Building-name">
            <h2>Buy a {name}</h2>
          </div>
        </button>
        <div className="Building-stats">
          <div>Cost: {building.cost}</div>
          <div>CPS: {cps}</div>
          <div>Total: {building.count}</div>
          <div>Total CPS: {building.count * cps}</div>
          <div>All time cakes: {building.alltime}</div>
        </div>
      </div>
    );
  }
}

export default view(Building);
