import React, { Component } from "react";
import { Image } from "react-bootstrap";
import uno from "../assets/1.jpg";
import "./Squares.css";

class Squares extends Component {
  render() {
    const { data, textSquare } = this.props;
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
    const squarePhoto = data.map(item => {
      return (
        <Image
          className="images"
          src={item.source}
          key={item.key}
          alt={item.key}
        />
      );
    });
    return !textSquare ? squareInfo : squarePhoto;
  }
}

export default Squares;
