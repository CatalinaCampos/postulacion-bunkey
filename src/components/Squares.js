import React, { Component } from "react";
import "./Squares.css";

class Squares extends Component {
  render() {
    const { data } = this.props;
    const squareInfo = data.map((item, index) => {
      return (
        <div
          key={item.key}
          style={{ backgroundColor: item.color }}
          className="category"
        >
          {item.name}
        </div>
      );
    });

    return squareInfo;
  }
}

export default Squares;
