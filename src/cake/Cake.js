import React, { PureComponent } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import cake from "./cake.png";

storage.count = storage.count || 0;

class Cake extends PureComponent {
  onClick() {
    storage.count++;
  }

  render() {
    return (
      <div>
        <img
          src={cake}
          alt="cake"
          onClick={this.onClick}
          width="500"
          height="500"
        />
        <div>You've clicked {storage.count} times</div>
      </div>
    );
  }
}

export default view(Cake);
