import React, { Component } from "react";

class Rectangle extends Component {
  render() {
    const { size, name } = this.props;
    return (
      <div
        style={{
          border: "1px solid white",
          backgroundColor: "transparent",
          width: size,
          height: "30px",
          textAlign: "center",
          borderRadius: "3px",
          margin: "0 0.5em 0.5em 0"
        }}
      >
        {name}
      </div>
    );
  }
}

export default Rectangle;
