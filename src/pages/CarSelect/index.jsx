import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Image
} from "react-bootstrap";

import { listCar } from "../../data/listCar";
import CarDetail from "./components/CarDetail";
import ColorSelect from "./components/ColorSelect";
import WheelSelect from "./components/WheelSelect";

export default class CarSelect extends Component {
  constructor(props) {
    super(props);
    const carDefault = listCar.find((item) => item.color === "black");
    console.log("default car ne:", carDefault);

    this.state = {
      colorSelected: "black",
      wheelSelected: "wheel-1",
      carSelected: carDefault,
    };
  }
  changeColor = (color) => {
    const carFind = listCar.find((item) => item.color === color);
    this.setState({
      carSelected: carFind,
      colorSelected: color,
    });
  };
  changeWheel = (wheel) => {
    this.setState({
      wheelSelected: wheel,
    });
  };
  render() {
    const { wheelSelected, colorSelected, carSelected } = this.state;
    return (
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Image
              src={`images/${colorSelected}/${wheelSelected}.jpg`}
              alt=""
              fluid
            />
            <h3 className="mt-3"> See more features</h3>
            <CarDetail car={carSelected} />
          </Col>
          <Col lg={4} className="d-flex flex-column gap-3">
            <ColorSelect
              color={colorSelected}
              callbackChange={this.changeColor}
            />
            <WheelSelect
              wheel={wheelSelected}
              callbackChange={this.changeWheel}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
