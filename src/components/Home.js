import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { dataHome, lastUpload } from "../data/data";
import Squares from "./Squares.js";
import Modal from "./Modal/Modal.js";
import "./Home.css";

class Home extends Component {
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
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "2em"
          }}
        >
          {lastUpload.map(item => {
            return <Modal img={item.source} key={item.key} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default Home;
