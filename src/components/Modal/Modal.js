import React, { Component } from "react";
import { Row, Col, Image } from "react-bootstrap";
import ModalImage from "./ModalImage";

class Modal extends Component {
  constructor() {
    super();
    this.state = {
      modalShow: false
    };
  }

  setModalShow = state => {
    this.setState({
      modalShow: state
    });
  };

  handleShow = () => {
    this.setState({
      modalShow: true
    });
  };

  render() {
    const { modalShow } = this.state;
    const { img } = this.props;
    return (
      <Row>
        <Col>
          <div>
            <Image
              src={img}
              style={{ width: "240px" }}
              onClick={() => this.handleShow(true)}
            />
          </div>
        </Col>
        <ModalImage
          show={modalShow}
          img={img}
          onHide={() => this.setModalShow(false)}
          size="lg"
        />
      </Row>
    );
  }
}

export default Modal;
