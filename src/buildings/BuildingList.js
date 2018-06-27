import React, { Component } from "react";
import { storage } from "react-easy-params";
import Building from "./Building";
import "./BuildingList.css";

import forkImage from "./img/fork.png";
import frostingImage from "./img/frosting.png";
import sprinklesImage from "./img/sprinkles.png";

const buildings = [
  { name: "Fork", baseCost: 10, cps: 1, image: forkImage, alltime: 0 },
  { name: "Frosting", baseCost: 20, cps: 2, image: frostingImage, alltime: 0 },
  { name: "Sprinkles", baseCost: 40, cps: 4, image: sprinklesImage, alltime: 0 }
];

class BuildingList extends Component {
  componentDidMount() {
    // remove any unconfigured buildings from localstorage
    storage.buildings = storage.buildings || {};
    const currentBuildingNames = buildings.map(Building => Building.name);
    Object.keys(storage.buildings).forEach(key => {
      if (!currentBuildingNames.includes(key)) delete storage.buildings[key];
    });
  }

  render() {
    return (
      <div className="BuildingList">
        <h1>Buildings</h1>
        {buildings.map(building => (
          <Building
            key={building.name}
            name={building.name}
            baseCost={building.baseCost}
            cps={building.cps}
            image={building.image}
            alltime={building.alltime}
          />
        ))}
      </div>
    );
  }
}

export default BuildingList;
