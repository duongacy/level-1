import React, { Component } from "react";
import { Card, Button, Image } from "react-bootstrap";

export default class ChangeWheel extends Component {
  render() {
    const { callbackChange, selected } = this.props;
    console.log(selected);
    return (
      <Card>
        <Card.Header>Wheel</Card.Header>
        <Card.Body>
          <Button

            onClick={() => callbackChange("wheel-1")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border focus-box-shadow-none ${selected ==="wheel-1" ? "border-primary border-3" : "border-secondary"}`}
          >
            <Image src="images/icons/icon-wheel-1.jpg" height={40} />
            <span className="mx-2">Wheel 1</span>
          </Button>
          <Button
            onClick={() => callbackChange("wheel-2")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border focus-box-shadow-none ${selected ==="wheel-2" ? "border-primary border-3" : "border-secondary"}`}
          >
            <Image src="images/icons/icon-wheel-2.jpg" height={40} />
            <span className="mx-2">Wheel 2</span>
          </Button>
          <Button
            onClick={() => callbackChange("wheel-3")}
            variant="transparent"
            className={`d-block w-100 text-start my-1 rounded-0 border focus-box-shadow-none ${selected ==="wheel-3" ? "border-primary border-3" : "border-secondary"}`}
          >
            <Image src="images/icons/icon-wheel-3.jpg" height={40} />
            <span className="mx-2">Wheel-3</span>
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
