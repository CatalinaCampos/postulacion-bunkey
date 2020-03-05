import React from "react";
import { Container } from "react-bootstrap";
import NavComponent from "./components/NavComponent.js";
import Home from "./components/Home.js";
import "./App.css";

function App() {
  return (
    <Container fluid style={{ padding: "0" }}>
      <NavComponent />
      <Home />
    </Container>
  );
}

export default App;
