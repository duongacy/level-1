import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Image
} from "react-bootstrap";
import { listCar } from "../../data/listCar";
import CarDetail from "./components/CarDetail";
import ChangeColor from "./components/ChangeColor";
import ChangeWheel from "./components/ChangeWheel";


export default class CarSelect extends Component {
  constructor(props) {
    super(props);
    const carSelected = listCar.find((item) => item.color === "black");
    this.state = {
      carSelected: carSelected,
      color: "black",
      wheelSelected: "wheel-1",
    };
  }

  changeCarColor = (color) => {
    const carSelected = listCar.find((item) => item.color === color);
    this.setState({
      carSelected: carSelected,
      color: color,
    });
  };

  changeWheel = (wheel) => {
    this.setState({
      wheelSelected: wheel,
    });
  };
  render() {
    const { carSelected, color, wheelSelected } = this.state;
    return (
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Image src={`images/${color}/${wheelSelected}.jpg`} alt="" fluid />
            <h3 className="mt-3"> See more features</h3>
            <CarDetail car={carSelected} />
          </Col>
          <Col lg={4} className="d-flex flex-column gap-3">
            <ChangeColor callbackChange={this.changeCarColor} selected ={color}/>
            <ChangeWheel callbackChange={this.changeWheel} selected ={wheelSelected}/>
          </Col>
        </Row>
      </Container>
    );
  }
}
