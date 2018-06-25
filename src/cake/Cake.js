import React, { PureComponent } from "react";
import { store, view } from "react-easy-state";
import cake from "./cake.png";

const count = store({ value: 0 });

class Cake extends PureComponent {
  onClick() {
    count.value++;
  }

  render() {
    return (
      <div>
        <img
          src={cake}
          alt="cake"
          onClick={this.onClick}
          width="300"
          height="400"
        />
        <div>You've clicked {count.value} times</div>
      </div>
    );
  }
}

export default view(Cake);
