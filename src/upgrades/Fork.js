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

  componentDidMount() {
    setInterval(() => (storage.count += storage.forkCount), 1000);
  }

  render() {
    return (
      <button onClick={this.onClick}>
        <div>Buy a fork</div>
        <div>Cost: {storage.forkCost}</div>
        <div>Total: {storage.forkCount}</div>
      </button>
    );
  }
}

export default view(Fork);
