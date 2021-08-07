import React, { Component, Fragment } from "react";
import { Card, Image, Button } from "react-bootstrap";
import { listCar } from "../../../data/listCar";

export default class ColorSelect extends Component {
  render() {
    const { color, callbackChange } = this.props;
    return (
        <Card>
          <Card.Header>Select color</Card.Header>
          <Card.Body>
            {listCar.map((item) => (
              <Button
                key={item.id}
                onClick={() => callbackChange(item.color)}
                variant="transparent"
                className={`d-block w-100 text-start my-1 rounded-0 focus-box-shadow-none border ${
                  color === item.color && "border-dark border-3"
                } `}
                style={{
                  transition: "all .1s"
                }}
              >
                <Image src={`images/icons/icon-${item.color}.jpg`} height={40} />
                <span className="mx-2 text-uppercase">{item.color}</span>
              </Button>
            ))}
          </Card.Body>
        </Card>
    );
  }
}
