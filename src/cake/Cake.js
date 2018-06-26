import React, { Component } from "react";
import { view } from "react-easy-state";
import { storage } from "react-easy-params";
import cakeImage from "./cake.png";
import "./Cake.css";

storage.count = storage.count || 0;

class Cake extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 500,
      height: 500
    };

    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
  }

  onClick() {
    storage.count++;
  }

  onMouseDown() {
    this.setState({
      width: 475,
      height: 475
    });
  }

  onMouseUp() {
    this.setState({
      width: 500,
      height: 500
    });
  }

  render() {
    return (
      <div className="Cake">
        <img
          className="Cake-img"
          src={cakeImage}
          alt="cake"
          onClick={this.onClick}
          width={this.state.width}
          height={this.state.height}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
        />
      </div>
    );
  }
}

export default view(Cake);
