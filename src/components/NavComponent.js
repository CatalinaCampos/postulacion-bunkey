import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  Row,
  FormControl,
  NavDropdown
} from "react-bootstrap";
import { AiOutlineHome, AiOutlinePlusCircle } from "react-icons/ai";
import { GoGear } from "react-icons/go";
import { FaRegCheckCircle } from "react-icons/fa";
import "./NavComponent.css";

class NavComponent extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Navbar bg="primary" expand="sm" className="navbar-bunkey">
        <Row>
          <Navbar.Brand>Postulación BUNKEY</Navbar.Brand>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Ingrese un campo de búsqueda"
              className="mr-sm-2"
            />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </Row>
        <Row className="navbar-right">
          <div className="icons">
            <AiOutlineHome color="white" />
            <AiOutlinePlusCircle color="white" />
            <GoGear color="white" />
            <FaRegCheckCircle color="white" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Row className="profile-div">
                <div className="square"></div>
                <Row className="dropdown">
                  <div className="circle"></div>
                  <NavDropdown title="Catalina" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Perfil
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Cuenta
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Cerrar sesión
                    </NavDropdown.Item>
                  </NavDropdown>
                </Row>
              </Row>
            </Nav>
          </Navbar.Collapse>
        </Row>
      </Navbar>
    );
  }
}

export default NavComponent;
