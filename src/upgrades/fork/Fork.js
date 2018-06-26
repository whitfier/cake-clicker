import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";

const FORK_BASE_COST = 10;

storage.count = storage.count || 0;
storage.forkCount = storage.forkCount || 0;
storage.forkCost = storage.forkCost || FORK_BASE_COST;

class Fork extends Component {
  onClick() {
    if (storage.count >= storage.forkCost) {
      storage.count -= storage.forkCost;
      storage.forkCount++;
      storage.forkCost = Math.floor(
        FORK_BASE_COST * Math.pow(1.15, storage.forkCount)
      );
    }
  }

  render() {
    return (
      <button onClick={this.onClick}>
        <h2>Buy a fork</h2>
        <div>Cost: {storage.forkCost}</div>
        <div>Total: {storage.forkCount}</div>
      </button>
    );
  }
}

export default view(Fork);
