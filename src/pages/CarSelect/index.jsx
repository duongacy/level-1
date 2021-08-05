import React, { Component } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Button,
  Table,
} from "react-bootstrap";

import { listCar } from "../../data/listCar";
import CarDetail from "./components/CarDetail";
import SelectColor from "./components/SelectColor";
export default class CarSelect extends Component {
  constructor(props) {
    super(props);
    console.log(listCar);
    const carSelected = listCar.find((item) => item.color === "black");
    console.log("car selected: ", carSelected);
    this.state = {
      colorSelected: "black",
      wheelSelected: "wheel-1",
      carSelected: carSelected,
    };
  }

  changeColor = (color) => {
    console.log("color ne", color);
    const carSelected = listCar.find((item) => item.color === color);
    this.setState({
      colorSelected: color,
      carSelected: carSelected,
    });
  };

  changeWheel = (wheel) => {
    this.setState({
      wheelSelected: wheel,
    });
  };
  render() {
    return (
      <Container className="py-5">
        <Row>
          <Col lg={8}>
            <Image
              src={`images/${this.state.colorSelected}/${this.state.wheelSelected}.jpg`}
              alt=""
              fluid
            />
            <h3 className="mt-3"> See more features</h3>
            <CarDetail car={this.state.carSelected} />
          </Col>
          <Col lg={4} className="d-flex flex-column gap-3">
            <SelectColor callbackChange={this.changeColor} colorSelected={this.state.colorSelected}/>
            <Card>
              <Card.Header>Wheel</Card.Header>
              <Card.Body>
                <Button
                  onClick={() => this.changeWheel("wheel-1")}
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-1.jpg" height={40} />
                  <span className="mx-2">Wheel 1</span>
                </Button>
                <Button
                  onClick={() => this.changeWheel("wheel-2")}
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-2.jpg" height={40} />
                  <span className="mx-2">Wheel 2</span>
                </Button>
                <Button
                  onClick={() => this.changeWheel("wheel-3")}
                  variant="transparent"
                  className="d-block w-100 text-start my-1 rounded-0 border border-secondary"
                >
                  <Image src="images/icons/icon-wheel-3.jpg" height={40} />
                  <span className="mx-2">Wheel-3</span>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
