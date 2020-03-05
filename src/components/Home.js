import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dataHome, lastUpload } from "../data/data";
import Squares from "./Squares.js";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row>
          <Col className="subtitle">Mis Bunkers</Col>
        </Row>
        <Row>
          <Squares data={dataHome} />
        </Row>
        <Row>
          <Col className="subtitle">Últimos subidos</Col>
        </Row>
        <Row style={{ display: "flex", justifyContent: "space-between" }}>
          <Squares data={lastUpload} textSquare />
        </Row>
      </Container>
    );
  }
}

export default Home;
