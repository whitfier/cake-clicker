import React, { PureComponent } from "react";
import cake from "./cake.png";

class Cake extends PureComponent {
  onClick() {
    alert("You clicked the cake!");
  }

  render() {
    return (
      <img
        src={cake}
        alt="cake"
        onClick={this.onClick}
        width="300"
        height="400"
      />
    );
  }
}

export default Cake;
