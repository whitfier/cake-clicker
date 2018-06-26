import React, { PureComponent } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";

storage.count = storage.count || 0;
storage.forkCount = storage.forkCount || 0;

class Counter extends PureComponent {
  componentDidMount() {
    setInterval(() => (storage.count += storage.forkCount), 1000);
  }

  render() {
    return <div>You have {storage.count} slices of cake</div>;
  }
}

export default view(Counter);
