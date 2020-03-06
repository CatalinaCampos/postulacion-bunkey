import React, { Component } from "react";
import { Image, Modal, Row, Col } from "react-bootstrap";
import Rectangle from "../Rectangle.js";
import {
  FaPencilAlt,
  FaShareAlt,
  FaStar,
  FaExpandArrowsAlt,
  FaCloudDownloadAlt,
  FaTrash,
  FaFileExport,
  FaShieldAlt
} from "react-icons/fa";
import "./Modal.css";

class ModalImage extends Component {
  render() {
    const { img, onHide, show, size } = this.props;
    return (
      <div>
        <Modal size={size} show={show} onHide={onHide}>
          <Row className="header">
            <Col className="no-p">
              <button className="button-modal">﹤</button>
              <button className="button-modal">﹥</button>
            </Col>
            <Col className="flex no-p" style={{ justifyContent: "flex-end" }}>
              <button onClick={onHide} className="button-modal no-border">
                ✖
              </button>
            </Col>
          </Row>
          <Row style={{ margin: "1em 1em 0 0" }}>
            <Col>
              <Modal.Body className="no-p">
                <Image src={img} style={{ width: "350px" }} />
                <p style={{ color: "white" }}>
                  /Banco_de_Imágenes_y_Videos/Fotografías
                </p>
              </Modal.Body>
            </Col>
            <Col style={{ color: "white" }} className="no-p">
              <Row>
                <Col className="no-p">
                  <p className="p">Asset</p>
                  <Rectangle name="IMG_020" size="300px" />
                  <p className="p">Extensión</p>
                  <Rectangle name=".jpg" size="50px" />
                </Col>
                <Col className="border-top no-p">
                  <p className="p">Tags</p>
                  <Row>
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                    <Rectangle name="tag 1" size="50px" />
                  </Row>
                  <Row className="border-top">
                    <Col className="no-p">
                      <p className="p">Derechos de uso (Duración)</p>
                      <Rectangle name="Indefinido" size="100px" />
                    </Col>
                    <Col className="no-p">
                      <p className="p">Fecha de subida</p>
                      <Rectangle name="06/03/2020" size="100px" />
                    </Col>
                  </Row>
                  <Row className="border-top icons">
                    <FaPencilAlt color="white" />
                    <FaShareAlt color="white" />
                    <FaStar color="white" />
                    <FaExpandArrowsAlt color="white" />
                    <FaCloudDownloadAlt color="white" />
                    <FaTrash color="white" />
                    <FaFileExport color="white" />
                    <FaShieldAlt color="white" />
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

export default ModalImage;
